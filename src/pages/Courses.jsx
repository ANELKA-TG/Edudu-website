//course.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PromoBanner from '../components/Courses/PromoBanner';
import CourseFilters from '../components/Courses/CourseFilters';
import CourseSection from '../components/Courses/CourseSection';
import { courses, subjects } from '../data/courses'

const Courses = () => {
  const [category, setCategory] = useState('All Courses');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('latest');

  const sortCourses = (list) => {
    const copy = [...list];
    if (sort === 'price-asc') return copy.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return copy.sort((a, b) => b.price - a.price);
    return copy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  const matchesSearch = (c) => {
    const q = search.trim().toLowerCase();
    return c.title.toLowerCase().includes(q) || c.teacher.toLowerCase().includes(q);
  };

  const visibleSubjects = category === 'All Courses' ? subjects : [category];

  return (
    <main className="courses-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> | <span>Pricing</span>
      </div>

      <PromoBanner />

      <CourseFilters
        categories={['All Courses', ...subjects]}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      {visibleSubjects.map((subject) => {
        const list = sortCourses(
          courses.filter((c) => c.subject === subject && matchesSearch(c))
        );
        if (list.length === 0) return null;
        return <CourseSection key={subject} subject={subject} courses={list} />;
      })}
    </main>
  );
};

export default Courses;