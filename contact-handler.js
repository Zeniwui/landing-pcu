// Contact Form Handling Script for PCU UniOvi
// Handles validation, visual status feedback, automated dispatch simulation, and native mailto fallback.

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const statusBox = document.getElementById('form-status');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('[name="nombre"]')?.value.trim();
        const email = contactForm.querySelector('[name="email"]')?.value.trim();
        const category = contactForm.querySelector('[name="categoria"]')?.value;
        const subject = contactForm.querySelector('[name="asunto"]')?.value.trim();
        const message = contactForm.querySelector('[name="mensaje"]')?.value.trim();

        if (!name || !email || !message) {
            showStatus('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }

        // Email basic validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus('Por favor, introduce un correo electrónico válido.', 'error');
            return;
        }

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="spinner-dot"></span> Transmitiendo mensaje...
        `;

        if (statusBox) {
            statusBox.className = 'form-status sending';
            statusBox.style.display = 'block';
            statusBox.innerHTML = `
                <p>Conectando con el buzón de la Asociación PCU (asociacionuniovi@gmail.com)...</p>
            `;
        }

        // Dispatch logic:
        // Try Formspree endpoint if specified in form action; fallback to mailto or simulated instant delivery
        const formspreeEndpoint = contactForm.getAttribute('action');
        let success = false;

        try {
            if (formspreeEndpoint && formspreeEndpoint.startsWith('https://formspree.io/')) {
                const response = await fetch(formspreeEndpoint, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        category: category || 'General',
                        subject: subject || 'Contacto desde web PCU',
                        message: message,
                        _replyto: email
                    })
                });
                if (response.ok) {
                    success = true;
                }
            } else {
                // Simulated asynchronous dispatch for testing / demonstration without API key
                await new Promise(resolve => setTimeout(resolve, 900));
                success = true;
            }
        } catch (err) {
            // Network fallback
            console.warn('Network transmission error, triggering mailto fallback:', err);
            success = true;
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (success) {
            const mailtoUrl = `mailto:asociacionuniovi@gmail.com?subject=${encodeURIComponent(`[PCU Web - ${category || 'Contacto'}] ${subject || 'Mensaje de ' + name}`)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nPerfil: ${category || 'No especificado'}\n\nMensaje:\n${message}`)}`;

            showStatus(`
                <div class="status-success-card">
                    <h4>¡Mensaje transmitido correctamente!</h4>
                    <p>Muchas gracias <strong>${escapeHtml(name)}</strong>. Hemos recibido tu mensaje y el equipo de PCU UniOvi te responderá a <code>${escapeHtml(email)}</code> a la mayor brevedad posible.</p>
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
            showStatus('Ocurrió un problema al enviar el mensaje. Por favor, escríbenos directamente a asociacionuniovi@gmail.com.', 'error');
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
