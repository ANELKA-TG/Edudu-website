import logo from '../assets/logo.png';
import { columns } from '../data/teachers';
import { socials } from '../data/teachers';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <div className="footer__logo">
          <img src={logo} alt="Edudu logo" />
          <span>Edudu</span>
        </div>

        <div className="footer__social">
          {socials.map((s) => (
            <a key={s.id} href="#" aria-label={s.name}>
              <img src={s.icon} alt={s.name} />
            </a>
          ))}
        </div>

        <p> &copy; 2020 Edudu.co</p>
        <p>
          Edudu is a registered
          <br />
          trademark of Edudu.co
        </p>
      </div>

      {columns.map((col) => (
        <div key={col.title} className="footer__col">
          <h4>{col.title}</h4>
          <ul>
            {col.links.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;