import './ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <span className="contact-label">CONTACT THE STUDIO</span>
        <h2>Stay Connected to the Forge</h2>
        <p>
          Follow the development of Divine Resurrection, Royal Treasury, and
          future worlds from Elah Forge Studios.
        </p>

        <a className="contact-button" href="mailto:contact@elahforgestudios.com">
          contact@elahforgestudios.com
        </a>

        <span className="contact-note">
          Studio email service is being established. This address will become
          active when email hosting is configured.
        </span>
      </div>
    </section>
  );
}

export default ContactSection;
