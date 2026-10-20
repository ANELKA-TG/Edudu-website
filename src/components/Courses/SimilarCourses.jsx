import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';

const SimilarCourses = ({ current }) => {
  const others = courses.filter((c) => c.id !== current.id);
  const same = others.filter((c) => c.subject === current.subject);
  const rest = others.filter((c) => c.subject !== current.subject);
  const list = [...same, ...rest].slice(0, 3);

  return (
    <section className="similar">
      <div className="similar__head">
        <h3>Similar Courses</h3>
        <Link to="/courses">See more &gt;</Link>
      </div>

      <div className="similar__list">
        {list.map((c) => (
          <Link key={c.id} to={`/courses/${c.id}`} className="similar__card">
            <img src={c.image} alt={c.title} />
            <div>
              <h4>{c.title}</h4>
              <p>{c.description}</p>
              <div className="similar__price">
                <strong>$ {c.price}</strong>
                <del>$ {c.oldPrice}</del>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SimilarCourses;