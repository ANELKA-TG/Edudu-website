//coursefilter
import { FaSearch } from 'react-icons/fa';

const CourseFilters = ({ categories, category, setCategory, search, setSearch, sort, setSort }) => (
  <section className="filters">
    <div className="filters__tabs">
      {categories.map((c) => (
        <button
          key={c}
          className={`filters__tab ${category === c ? 'active' : ''}`}
          onClick={() => setCategory(c)}
        >
          {c}
        </button>
      ))}
    </div>

    <div className="filters__bar">
      <div className="filters__search">
        <input
          type="text"
          placeholder="Serach Course, Teacher name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button aria-label="Search"><FaSearch /></button>
      </div>

      <div className="filters__sort">
        <label>Sort by:</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="latest">Latest</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </div>
    </div>
  </section>
);

export default CourseFilters;