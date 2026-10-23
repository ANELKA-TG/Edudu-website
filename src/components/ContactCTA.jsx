import { useState } from 'react';
import { avatars } from '../data/avatars';


const ContactCTA = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\+?[0-9\s-]{8,15}$/.test(phone)) {
      setMessage('Please enter a valid phone number.');
      return;
    }
    setMessage('Thank you! We will contact you soon.');
    setPhone('');
  };

  return (
    <section className="cta">
      {avatars.map((a, i) => (
        <img key={i} src={a.src} alt="" className={`cta__avatar ${a.className}`} />
      ))}

      <h2>Do you still have any questions?</h2>
      <p>
        Don't hesitate to leave us your phone number. We will contact you to
        discuss any questions you may have
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>

      {message && <small className="cta__msg">{message}</small>}
    </section>
  );
};

export default ContactCTA;