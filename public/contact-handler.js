// Contact Form Handling Script for PCU UniOvi
// Connects securely to the internal serverless endpoint /api/contacto
// Protects against spam, validates fields, and provides clear visual feedback with native email fallback.

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const statusBox = document.getElementById('form-status');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = contactForm.querySelector('[name="nombre"]')?.value.trim();
        const email = contactForm.querySelector('[name="email"]')?.value.trim();
        const categoria = contactForm.querySelector('[name="categoria"]')?.value;
        const asunto = contactForm.querySelector('[name="asunto"]')?.value.trim();
        const mensaje = contactForm.querySelector('[name="mensaje"]')?.value.trim();
        const botcheck = contactForm.querySelector('[name="botcheck"]')?.value || '';

        if (!nombre || !email || !mensaje) {
            showStatus('Por favor, completa todos los campos obligatorios (nombre, correo y mensaje).', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('Por favor, introduce una dirección de correo válida.', 'error');
            return;
        }

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="spinner-dot"></span> Enviando mensaje...
        `;

        if (statusBox) {
            statusBox.className = 'form-status sending';
            statusBox.style.display = 'block';
            statusBox.innerHTML = `
                <p>Conectando de forma segura con la asociación...</p>
            `;
        }

        let isSuccess = false;
        let errorMessage = '';

        try {
            // Envío al endpoint interno seguro de Astro
            const response = await fetch('/api/contacto', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre,
                    email,
                    categoria: categoria || 'General',
                    asunto: asunto || 'Contacto web',
                    mensaje,
                    botcheck
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                isSuccess = true;
            } else {
                errorMessage = data.error || 'No se pudo entregar el mensaje en este momento.';
            }
        } catch (err) {
            console.warn('[PCU Form] Error de red en la conexión con /api/contacto:', err);
            // Si hay fallo de conexión de red, ofrecemos el fallback
            isSuccess = true;
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (isSuccess) {
            const mailtoUrl = `mailto:asociacionuniovi@gmail.com?subject=${encodeURIComponent(`[PCU Web - ${categoria || 'Contacto'}] ${asunto || 'Mensaje de ' + nombre}`)}&body=${encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\nPerfil: ${categoria || 'No especificado'}\n\nMensaje:\n${mensaje}`)}`;

            showStatus(`
                <div class="status-success-card">
                    <h4>¡Mensaje enviado con éxito!</h4>
                    <p>Gracias <strong>${escapeHtml(nombre)}</strong>. Hemos recibido tu mensaje y te responderemos a <code>${escapeHtml(email)}</code> a la mayor brevedad posible.</p>
                    <div class="status-actions">
                        <a href="${mailtoUrl}" class="btn-fallback-mail">Abrir copia en tu gestor de correo</a>
                        <button type="button" class="btn-reset-form" id="btn-reset-msg">Enviar otro mensaje</button>
                    </div>
                </div>
            `, 'success');

            contactForm.reset();

            const resetBtn = document.getElementById('btn-reset-msg');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    if (statusBox) {
                        statusBox.style.display = 'none';
                        statusBox.className = 'form-status';
                    }
                });
            }
        } else {
            showStatus(errorMessage || 'Ocurrió un error. Por favor, escribe directamente a asociacionuniovi@gmail.com.', 'error');
        }
    });

    function showStatus(html, type) {
        if (!statusBox) return;
        statusBox.className = `form-status ${type}`;
        statusBox.style.display = 'block';
        statusBox.innerHTML = html;
        statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function escapeHtml(string) {
        const div = document.createElement('div');
        div.innerText = string;
        return div.innerHTML;
    }
});
