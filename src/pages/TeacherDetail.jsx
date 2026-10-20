import { Link, useParams } from 'react-router-dom';
import { FaStar, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { teachers, defaultTeacherDetails } from '../data/teachers';
import { courses } from '../data/courses';

const socials = [
  { id: 1, name: 'Facebook', icon: <FaFacebookF />, url: '#' },
  { id: 2, name: 'Instagram', icon: <FaInstagram />, url: '#', highlight: true },
  { id: 3, name: 'Twitter', icon: <FaTwitter />, url: '#' },
  { id: 4, name: 'LinkedIn', icon: <FaLinkedinIn />, url: '#' },
];

const TeacherDetail = () => {
  const { id } = useParams();
  const found = teachers.find((t) => t.id === Number(id));

  if (!found) {
    return (
      <main className="tdetail-page">
        <p>Teacher not found.</p>
        <Link to="/teachers">Back to teachers</Link>
      </main>
    );
  }

  const teacher = { ...defaultTeacherDetails, ...found };
  const teacherCourses = courses.filter((c) => c.teacher === teacher.name);

  return (
    <main className="tdetail-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> | <Link to="/teachers">Teacher</Link> |{' '}
        <span>Detail Teacher</span>
      </div>

      <div className="tdetail">
        {/* Profile card */}
        <aside className="tprofile">
          <img src={teacher.photo} alt={teacher.name} className="tprofile__photo" />
          <h3>{teacher.name}</h3>

          <ul className="tprofile__list">
            <li>
              <span>Total Course</span>
              <strong className="orange">{teacher.totalCourses}</strong>
            </li>
            <li>
              <span>Ratings</span>
              <strong>
                <FaStar className="tprofile__star" /> {teacher.rating}
                <span className="orange">({teacher.reviews})</span>
              </strong>
            </li>
            <li>
              <span>Experiences</span>
              <strong>{teacher.years} Years</strong>
            </li>
            <li>
              <span>Grauduated</span>
              <strong>{teacher.graduated}</strong>
            </li>
            <li>
              <span>Language</span>
              <strong>{teacher.languages}</strong>
            </li>
            <li>
              <span>Social</span>
              <div className="tprofile__social">
                {socials.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    aria-label={s.name}
                    className={s.highlight ? 'highlight' : ''}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </aside>

        {/* Main content */}
        <section className="tcontent">
          <h3>About {teacher.name.split(' ')[0].replace(',', '')}</h3>
          <p>{teacher.about}</p>
          <p>{teacher.about}</p>

          <h3>Certification</h3>
          <p>{teacher.certification}</p>

          <h3>Courses ({teacherCourses.length})</h3>

          {teacherCourses.length === 0 ? (
            <p>No courses yet.</p>
          ) : (
            <div className="tcontent__courses">
              {teacherCourses.map((c) => (
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
          )}
        </section>
      </div>
    </main>
  );
};

export default TeacherDetail;