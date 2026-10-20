import { useState } from 'react';
import av1 from '../assets/jessica.png';
import av2 from '../assets/darlene.png';
import av3 from '../assets/diane.png';
import star from '../assets/star.png'

const reviews = [
  { id: 1, name: 'Jassica Andrew', avatar: av1, text: 'My child has improved a lot after finishing school. Thank you so much Edudu.' },
  { id: 2, name: 'Darlene Robertson', avatar: av2, text: 'My child knows how to achieve very good classes. English ability is also much better. The cost is very cheap, so you should register. Thank you very much Edudu.' },
  { id: 3, name: 'Dianne Russell', avatar: av3, text: 'My child has improved a lot after finishing school. Thank you so much Edudu.' },
  { id: 4, name: 'Cameron Willow', avatar: av1, text: 'The teachers are patient and the lessons are fun. Highly recommended!' },
  { id: 5, name: 'Esther Howard', avatar: av2, text: 'Flexible schedule and great results. My son loves the live classes.' },
];

const VISIBLE = 3;

const Testimonials = () => {
 const [start, setStart] = useState(0);

  const prev = () => setStart((start - 1 + reviews.length) % reviews.length);
  const next = () => setStart((start + 1) % reviews.length);

  const visible = Array.from({ length: VISIBLE }, (_, i) => reviews[(start + i) % reviews.length]);


  return (
    
    <section className="testimonials">
      <h2>What do students say about Edudu?</h2>

      <div className="testimonials__row">
        <button className="arrow" onClick={prev} aria-label="Previous">‹</button>

        <div className="testimonials__list">
          {visible.map((r) => (
            <div key={r.id} className="testimonials__card">
              <img src={r.avatar} alt={r.name} />
              <h4>{r.name}</h4>
              <img src={star} alt="" />
              <p>{r.text}</p>
            </div>
          ))}
        </div>

        <button className="arrow" onClick={next} aria-label="Next">›</button>
      </div>
    </section>
  )
}

export default Testimonials