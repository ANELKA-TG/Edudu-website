//course section
import { useState } from 'react';
import CourseCard from './CourseCard';

const CourseSection = ({ subject, courses }) => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? courses : courses.slice(0, 4);

  return (
    <section className="course-section">
      <div className="course-section__head">
        <h3>{subject} Course</h3>
        {courses.length > 4 && (
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'See less <' : 'See more >'}
          </button>
        )}
      </div>

      <div className="course-grid">
        {shown.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;