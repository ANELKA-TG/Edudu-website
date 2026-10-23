
import { subjects } from "../data/teachers"

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