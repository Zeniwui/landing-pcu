// Floating Version Switcher Helper
(function() {
    function initSwitcher() {
        const path = window.location.pathname;
        let active = 1;
        if (path.includes('version-2')) active = 2;
        else if (path.includes('version-3')) active = 3;

        const nav = document.createElement('aside');
        nav.className = 'version-switcher-bar';
        nav.setAttribute('aria-label', 'Selector de propuestas de diseño');
        nav.innerHTML = `
            <div class="version-switcher-label">
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span>3 Propuestas</span>
            </div>
            <div class="version-switcher-links">
                <a href="index.html" class="version-pill ${active === 1 ? 'active' : ''}">
                    <span>v1 Editorial</span>
                    <span class="version-pill-tag">Técnico</span>
                </a>
                <a href="version-2.html" class="version-pill ${active === 2 ? 'active' : ''}">
                    <span>v2 Dark Arena</span>
                    <span class="version-pill-tag">ICPC</span>
                </a>
                <a href="version-3.html" class="version-pill ${active === 3 ? 'active' : ''}">
                    <span>v3 Neo-Brutalist</span>
                    <span class="version-pill-tag">Astur</span>
                </a>
            </div>
        `;
        document.body.appendChild(nav);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSwitcher);
    } else {
        initSwitcher();
    }
})();
