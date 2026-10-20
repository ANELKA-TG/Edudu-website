import TeacherCard from '../components/Teachers/TeacherCard';
import { teachers } from '../data/teachers';

const Teachers = () => (
  <main className="teachers-page">
    <h2>A team of experienced teachers at Edudu</h2>

    <div className="teachers-grid">
      {teachers.map((t) => (
        <TeacherCard key={t.id} teacher={t} />
      ))}
    </div>
  </main>
);

export default Teachers;