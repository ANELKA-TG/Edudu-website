import mathIcon from '../assets/math.png'
import litIcon from '../assets/literature.png'
import engIcon from '../assets/english.png'
import artIcon from '../assets/arts.png'

const subjects = [
  { id: 1, name: 'Math', icon: mathIcon },
  { id: 2, name: 'Literature', icon: litIcon },
  { id: 3, name: 'English', icon: engIcon },
  { id: 4, name: 'Art', icon: artIcon },
];

const Subjects = () => {
  return (
   <section className="subjects">
      <h2>Lessons revolve around 4 areas</h2>
      <p>
        Diverse lessons around 4 subjects: Math, literature, English, drawing
        help children improve their comprehensive knowledge
      </p>

      <div className="subjects__list">
        {subjects.map((s) => (
          <div key={s.id} className="subjects__card">
            <img src={s.icon} alt={s.name} />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section> 
    
  )
}

export default Subjects