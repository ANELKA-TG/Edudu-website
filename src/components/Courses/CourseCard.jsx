import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import studentsImg from '../../assets/Ander.png';

const CourseCard = ({ course }) => (
  <Link to={`/courses/${course.id}`} className="course-card-link">
    <article className="course-card">
      <div className="course-card__image">
        <img src={course.image} alt={course.title} />
        <div className="course-card__students">
          <img src={studentsImg} alt="" />
          <span>+ {course.students} students</span>
        </div>
      </div>

      <div className="course-card__body">
        <h4>{course.title}</h4>
        <p>{course.description}</p>

        <div className="course-card__footer">
          <div className="course-card__price">
            <strong>$ {course.price}</strong>
            <del>$ {course.oldPrice}</del>
          </div>
          <button
            className="course-card__cart"
            aria-label="Add to cart"
            onClick={(e) => e.preventDefault()}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </article>
  </Link>
);

export default CourseCard;