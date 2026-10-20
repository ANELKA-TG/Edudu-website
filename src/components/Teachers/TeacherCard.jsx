import { Link } from 'react-router-dom';

const TeacherCard = ({ teacher }) => (
  <Link to={`/teachers/${teacher.id}`} className="teacher-card-link">
    <article className="teacher-card">
      <img src={teacher.photo} alt={teacher.name} />
      <h4>{teacher.name}</h4>
      <div className="stars">{'★'.repeat(teacher.rating)}</div>
      <p>
        {teacher.years} years of experience teaching {teacher.subject}. Currently
        working at {teacher.school} school.
      </p>
    </article>
  </Link>
);

export default TeacherCard;