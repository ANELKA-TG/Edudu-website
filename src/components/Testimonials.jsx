import { useState } from 'react';

import star from '../assets/star.png'
import leftarr from '../assets/leftarr.png'
import rightarr from '../assets/rightarr.png'
import { reviews } from '../data/teachers';


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
        <button className="arrow" onClick={prev} aria-label="Previous"> 
<img src={leftarr} alt="left arrow" />
        </button>

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

        <button className="arrow" onClick={next} aria-label="Next">
 <img src={rightarr} alt="right arrow" />
        </button>
      </div>
    </section>
  )
}

export default Testimonials