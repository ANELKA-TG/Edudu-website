import boyImg from '../assets/page1-schoolboy.png'
import checkImg from '../assets/check.png'

import { outcomes } from '../data/teachers' 

const Outcomes = () => {
  return (
    <section className="outcomes">
      <div className="outcomes__image">
        <img src={boyImg} alt="Boy holding a Back to School board" />
      </div>

      <div className="outcomes__text">
        <h2>
          What will your child
          <br />
          get after studying at
          <br />
          Edudu?
        </h2>
        <ul>
          {outcomes.map((item, i) => (
            <li key={i}>
             <img src={checkImg} alt="" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Outcomes