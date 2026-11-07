import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let body: Record<string, any> = {};

    if (contentType.includes('application/json')) {
      body = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        body[key] = value;
      });
    }

    const { nombre, email, categoria, asunto, mensaje, botcheck } = body;

    console.log('[PCU Contact API] Solicitud de contacto recibida para:', email);

    // 1. Trampa anti-bots (Honeypot):
    // Solo bloquea si el campo fue rellenado conscientemente por un bot
    if (botcheck && botcheck !== 'false' && botcheck !== 'off') {
      console.warn('[PCU Contact API] Trampa anti-bots activada. Envío simulado para neutralizar bot.');
      return new Response(
        JSON.stringify({ success: true, message: 'Mensaje procesado' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Validación de campos obligatorios
    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Por favor, completa los campos obligatorios (nombre, correo y mensaje).'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'El formato del correo electrónico no es válido.'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Lectura segura de la clave desde las variables de entorno
    let accessKey =
      import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ||
      import.meta.env.WEB3FORMS_ACCESS_KEY ||
      process.env.PUBLIC_WEB3FORMS_ACCESS_KEY ||
      process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey && typeof process.loadEnvFile === 'function') {
      try {
        process.loadEnvFile();
        accessKey = process.env.PUBLIC_WEB3FORMS_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;
      } catch (_) {}
    }

    if (!accessKey) {
      console.warn(
        '[PCU Contact API] ATENCIÓN: La variable WEB3FORMS_ACCESS_KEY no está definida en .env ni en Vercel. Modo simulación activado.'
      );
      return new Response(
        JSON.stringify({
          success: true,
          simulated: true,
          message: 'Mensaje recibido en modo simulación (falta configurar WEB3FORMS_ACCESS_KEY).'
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('[PCU Contact API] Transmitiendo a Web3Forms...');

    // 5. Envío seguro de servidor a servidor hacia Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey.trim(),
        name: nombre,
        email: email,
        subject: `[PCU Web - ${categoria || 'Contacto'}] ${asunto || 'Nuevo mensaje de ' + nombre}`,
        message: `Nombre: ${nombre}\nEmail: ${email}\nPerfil: ${categoria || 'No especificado'}\nAsunto: ${asunto || 'Sin asunto'}\n\nMensaje:\n${mensaje}`,
        from_name: 'PCU UniOvi Web Portal',
        replyto: email,
      }),
    });

    const result = await response.json();
    console.log('[PCU Contact API] Respuesta de Web3Forms:', result);

    if (response.ok && result.success) {
      return new Response(
        JSON.stringify({ success: true, message: 'Mensaje transmitido correctamente a la asociación.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      console.error('[PCU Contact API] Web3Forms devolvió un error:', result.message || result);
      return new Response(
        JSON.stringify({
          success: false,
          error: result.message || 'No se pudo entregar el correo en este momento. Por favor, escribe directamente a asociacionuniovi@gmail.com.'
        }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('[PCU Contact API] Error interno en el endpoint:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Error interno al procesar el mensaje. Por favor, escribe directamente a asociacionuniovi@gmail.com.'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
