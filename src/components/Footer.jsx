import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/LinkedIn.png';
import logo from '../assets/logo.png';

const socials = [
  { id: 1, name: 'Facebook', icon: facebook },
  { id: 2, name: 'Twitter', icon: twitter },
  { id: 3, name: 'LinkedIn', icon: linkedin },
];

const columns = [
  {
    title: 'Courses',
    links: ['Classroom courses', 'Virtual classroom courses', 'E-learning courses', 'Video Courses', 'Offline Courses'],
  },
  {
    title: 'Community',
    links: ['Learners', 'Partners', 'Developers', 'Transactions', 'Blog', 'Teaching Center'],
  },
  {
    title: 'Quick links',
    links: ['Home', 'Professional Education', 'Courses', 'Admissions', 'Testimonial', 'Programs'],
  },
  {
    title: 'More',
    links: ['Press', 'Investors', 'Terms', 'Privacy', 'Help', 'Contact'],
  },
];

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

        <p>©2020 Edudu.co</p>
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