---
layout: layouts/base.njk
title: Contact CultivateU
permalink: /contact/
---

<div class="page-content">
    <div class="container">
        <h1 class="section-title page-title">Get In Touch</h1>

        <p class="page-intro" style="max-width: 700px; margin: 0 auto 40px auto;">
            We'd love to hear from you! Whether you have questions, want to discuss opportunities, or just want to share your thoughts on educational gaming, feel free to reach out.
        </p>

        <div class="contact-details-form-wrapper">
            <div class="contact-details">
                <h2>Our Contact Information</h2>
                <address>
                    CULTIVATEU STUDIOS PRIVATE LIMITED<br>
                    <span style="font-size:0.9em; color:#777;">CIN: U62099AP2023PTC112348</span><br>
                    Guntur, Andhra Pradesh, India – 522005
                </address>
                <p>📞 <a href="tel:+918008992963">+91 800 899 2963</a></p>
                <p>📧 <a href="mailto:contact@cultivateu.in">contact@cultivateu.in</a></p>
                <p>🔗<a href="https://www.linkedin.com/company/cultivateustudios/" target="_blank" rel="noopener noreferrer" class="contact-link-linkedin">linkedin.com/company/cultivateustudios</a></p>
            </div>

            <div class="contact-form-container">
                <h2>Send Us a Message</h2>
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you/" class="contact-form">
                    {# This hidden input is essential for Netlify to identify the form #}
                    <input type="hidden" name="form-name" value="contact" />

                    {# Honeypot field for spam prevention - leave this hidden and empty. Bots might fill it. #}
                    <p class="hidden-field" style="display:none;">
                        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                    </p>

                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required> {# Subject is now required #}
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="3" required maxlength="2000"></textarea>
                    </div>
                    <div class="form-group submit-group"> {# Class for centering button via CSS #}
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
        </div> {# This closes contact-details-form-wrapper #}

        {# Optional: JavaScript for textarea auto-expansion #}
        <script>
          const textarea = document.getElementById('message');
          if (textarea) {
            // Set initial height based on content (e.g., rows attribute) or a fixed small height
            // For `rows="3"`, the initial scrollHeight might be enough.
            // Or, explicitly set a base style if scrollHeight is too small initially.
            // textarea.style.height = 'auto'; // Reset first in case of back/forward navigation
            // textarea.style.height = textarea.scrollHeight + 'px';
            
            // Simpler approach: ensure overflow is hidden and height is calculated on input
            textarea.style.overflowY = 'hidden';
            // You might not need to set initial height via JS if rows="3" and min-height in CSS is sufficient.
            // The event listener will handle expansion from there.

            textarea.addEventListener('input', function () {
              this.style.height = 'auto'; // Temporarily shrink to get correct scrollHeight
              this.style.height = (this.scrollHeight) + 'px'; // Set to new scrollHeight
            }, false);
          }
        </script>
    </div> {# This closes container #}
</div> {# This closes page-content #}