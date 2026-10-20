import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Teachers from './pages/Teachers';
import TeacherDetail from './pages/TeacherDetail';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/teachers" element={<Teachers/>}/>
        <Route path="/teachers/:id" element={<TeacherDetail/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;