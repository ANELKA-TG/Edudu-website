import teacherImg from '../assets/experiencedteacher.png';
import programImg from '../assets/creativeprogram.png';
import costImg from '../assets/appropriatecost.png';

const reasons = [
  {
    id: 1,
    img: teacherImg,
    title: 'Experienced teacher',
    text: 'Instructors from all over Vietnam and around the world, providing quality learning experiences and helping students develop their full potential',
  },
  {
    id: 2,
    img: programImg,
    title: 'Creative program',
    text: 'Flexible payment, suitable to personal financial situation and study schedule. Pay monthly, by course or "study now, pay later"',
  },
  {
    id: 3,
    img: costImg,
    title: 'Appropriate cost',
    text: 'Designed to help every learner progress, with activities that keep students engaged and learning continuously.',
  },
];

const WhyChoose = () => {
  return (
     <section className="why">
      <h2>Why should you choose Edudu?</h2>
      <div className="why__list">
        {reasons.map((r) => (
          <div key={r.id} className="why__card">
            <img src={r.img} alt={r.title} />
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChoose