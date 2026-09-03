import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>ELAH FORGE STUDIOS</h3>
        <p>Crafting Worlds. Forging Legends.</p>
        <p className="copyright">
          © {new Date().getFullYear()} Elah Forge Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
