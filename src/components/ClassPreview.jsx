import { useState } from 'react';
import classImg from '../assets/freelesson.png';
import audio from '../assets/audio.png';
import live from '../assets/live.png';
import recorded from '../assets/record.png';

const tabs = [
  { id: 'audio', label: 'Audio Classes', icon: audio },
  { id: 'live', label: 'Live Classes', icon: live },
  { id: 'recorded', label: 'Recorded Class', icon: recorded },
];

const ClassPreview = () => {
  const [active, setActive] = useState('live');

  return (
    <section className="class">
      <h2>What's in the class at Edudu?</h2>
      <p>
        Online classes with teachers, continuous questions and answers during
        class if you do not understand. At the end of the session, the lesson is
        recorded for your child to review
      </p>
      <button className="btn-yellow">Free trial lesson</button>

      <div className="class__video">
        <img src={classImg} alt="Online class preview" />
      </div>

      <div className="class__tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`class__tab ${active === t.id ? 'active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            <img src={t.icon} alt="" className="class__tab-icon" />
            {t.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ClassPreview;