import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { courses, defaultDetails } from '../data/courses';
import SimilarCourses from '../components/Courses/SimilarCourses';
import ContactCTA from '../components/ContactCTA';
import videoImg from '../assets/freelesson.png';

const CourseDetail = () => {
  const { id } = useParams();
  const found = courses.find((c) => c.id === Number(id));
  const [showMore, setShowMore] = useState(false);

  if (!found) {
    return (
      <main className="detail-page">
        <p>Course not found.</p>
        <Link to="/courses">Back to courses</Link>
      </main>
    );
  }

  const course = { ...defaultDetails, ...found };

  return (
    <main className="detail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> | <Link to="/courses">Course</Link> |{' '}
        <span>Detail Course</span>
      </div>

      {/* Top card */}
      <section className="detail-top">
        <div className="detail-top__video">
          <img src={videoImg} alt={course.title} />
          <button className="detail-top__play" aria-label="Play video">
            <FaPlay />
          </button>
        </div>

        <div className="detail-top__info">
          <h1>{course.title}</h1>

          <p>
            Number of lessons: <strong>{course.lessons} Lesson</strong>
            <button className="detail-top__link" onClick={() => setShowMore(!showMore)}>
              View detail {showMore ? '▴' : '▾'}
            </button>
          </p>
          {showMore && (
            <p className="detail-top__more">
              Includes video lessons, practice quizzes and downloadable notes.
            </p>
          )}

          <p>Completion time: <strong>{course.duration}</strong></p>
          <p>Teacher: <span className="detail-top__purple">{course.teacher}</span></p>
          <p>Students have learned: <strong>{course.learners}</strong></p>
          <p>
            Review: <span className="stars">{'★'.repeat(course.rating)}</span>
          </p>

          <p className="detail-top__price">Price: <strong>{course.price}$</strong></p>

          <div className="detail-top__buttons">
            <button className="btn-yellow">Add to cart</button>
            <button className="btn-cream">Free trial lesson</button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="detail-content">
        <h2>Course Details</h2>
        <p>{course.details}</p>
        <p>{course.details}</p>

        <h2>Certification</h2>
        <p>{course.certification}</p>

        <h2>Who this course is for</h2>
        <p>{course.audience}</p>

        <h2>What you'll learn in this course:</h2>
        <ul>
          {course.learn.map((item, i) => (
            <li key={i}>
              <span className="check">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <SimilarCourses current={found} />
      <ContactCTA />
    </main>
  );
};

export default CourseDetail;