export const initFooterComponent = () => {
    const footerHTML = `
    <footer class="footer">
        <div class="footer-grid">
            <div class="footer-col about">
                <img src="/logo.jpeg" alt="Detmax Logo" class="footer-logo">
                <h4>About Detmax</h4>
                <p>Detmax Limited Company is a premier educational institution committed to bridging the digital gap and producing safe, competent motorists. Registered under PIN: P051811093F.</p>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/computer-college.html">Computer College</a></li>
                    <li><a href="/driving-school.html">Driving School</a></li>
                    <li><a href="/about-us.html">About Us</a></li>
                    <li><a href="/contact.html">Enrollment</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Support</h4>
                <ul class="footer-links">
                    <li><a href="/contact.html">Help Center</a></li>
                    <li><a href="/contact.html">Terms of Service</a></li>
                    <li><a href="/contact.html">Privacy Policy</a></li>
                    <li><a href="/contact.html">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Connect With Us</h4>
                <ul class="footer-contact-info">
                    <li><span class="icon-sm"><i data-lucide="map-pin"></i></span> Main Office, Nairobi, Kenya</li>
                    <li><span class="icon-sm"><i data-lucide="phone"></i></span> +254114971070 | +1 (801) 319-5465</li>
                    <li><span class="icon-sm"><i data-lucide="mail"></i></span> info@detmaxinstitute.co.ke</li>
                    <li><span class="icon-sm"><i data-lucide="clock"></i></span> Mon - Sat: 8:00 AM - 6:00 PM</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Detmax Limited Company. All Rights Reserved. Empowering Kenya's Future.</p>
        </div>
    </footer>
    `;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
};
