// Contact Form Handling Script for PCU UniOvi
// Submits securely from the user's browser directly to Web3Forms API
// Features client validation, spinner feedback, honeypot spam protection, and zero exposed secrets in GitHub.

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const statusBox = document.getElementById('form-status');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = contactForm.querySelector('[name="nombre"]')?.value.trim();
        const email = contactForm.querySelector('[name="email"]')?.value.trim();
        const mensaje = contactForm.querySelector('[name="mensaje"]')?.value.trim();
        const accessKey = contactForm.querySelector('[name="access_key"]')?.value.trim();

        if (!nombre || !email || !mensaje) {
            showStatus('Por favor, completa todos los campos obligatorios (nombre, correo y mensaje).', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('Por favor, introduce una dirección de correo válida.', 'error');
            return;
        }

        if (!accessKey) {
            showStatus('La clave de envío (WEB3FORMS_ACCESS_KEY) no está configurada en el entorno. Por favor, escribe directamente a asociacionuniovi@gmail.com.', 'error');
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
                <p>Conectando con el servidor de correo...</p>
            `;
        }

        // Serializar los datos del formulario incluyendo access_key, nombre, email, mensaje, etc.
        const formData = new FormData(contactForm);
        formData.append('from_name', 'PCU UniOvi Web');
        formData.append('subject', `[PCU Web - ${formData.get('categoria') || 'Contacto'}] Mensaje de ${nombre}`);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json();

            if (response.ok && result.success) {
                showStatus(`
                    <div class="status-success-card">
                        <h4>¡Mensaje enviado con éxito!</h4>
                        <p>Gracias <strong>${escapeHtml(nombre)}</strong>. Hemos recibido tu mensaje y te responderemos a <code>${escapeHtml(email)}</code> a la mayor brevedad posible.</p>
                        <div class="status-actions">
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
                console.error('[Web3Forms Error]', result);
                showStatus(result.message || 'No se pudo entregar el correo. Por favor, escribe directamente a asociacionuniovi@gmail.com.', 'error');
            }
        } catch (err) {
            console.error('[Web3Forms Network Error]', err);
            showStatus('Ocurrió un error al enviar. Por favor, escribe directamente a asociacionuniovi@gmail.com.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
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
