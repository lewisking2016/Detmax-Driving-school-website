export const initNavbarComponent = () => {
    const navbarHTML = `
    <header class="main-header">
        <div class="top-ticker">
            <div class="ticker-content">
                <span>🚀 ENROLL NOW FOR ONLINE COMPUTER CLASSES • MS OFFICE SPECIALIST • GRAPHIC DESIGN • DIGITAL SKILLS • NTSA REGISTERED DRIVING SCHOOL • CALL +254114971070 | +1 (801) 319-5465 • STUDY ANYWHERE IN KENYA 🇰🇪 • </span>
                <span>🚀 ENROLL NOW FOR ONLINE COMPUTER CLASSES • MS OFFICE SPECIALIST • GRAPHIC DESIGN • DIGITAL SKILLS • NTSA REGISTERED DRIVING SCHOOL • CALL +254114971070 | +1 (801) 319-5465 • STUDY ANYWHERE IN KENYA 🇰🇪 • </span>
            </div>
        </div>
        <nav class="navbar">
            <div class="logo-container">
                <a href="/"><img src="/logo.jpeg" alt="Detmax Logo" class="nav-logo"></a>
                <span class="brand-name">DETMAX</span>
            </div>
            <ul class="nav-links">
                <li><a href="/" id="nav-home">Home</a></li>
                <li><a href="/computer-college.html" id="nav-college">Computer College</a></li>
                <li><a href="/driving-school.html" id="nav-driving">Driving School</a></li>
                <li><a href="/about-us.html" id="nav-about">About</a></li>
                <li><a href="/contact.html" id="nav-contact">Contact</a></li>
            </ul>
            <a href="/contact.html" class="btn btn-primary nav-cta">Enroll Now</a>
            <button class="mobile-menu-toggle"><span></span><span></span><span></span></button>
        </nav>
    </header>
    `;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        
        // Mark active link
        const currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath === '/index.html') document.getElementById('nav-home')?.classList.add('active');
        else if (currentPath.includes('computer-college')) document.getElementById('nav-college')?.classList.add('active');
        else if (currentPath.includes('driving-school')) document.getElementById('nav-driving')?.classList.add('active');
        else if (currentPath.includes('about-us')) document.getElementById('nav-about')?.classList.add('active');
        else if (currentPath.includes('contact')) document.getElementById('nav-contact')?.classList.add('active');
    }
};
