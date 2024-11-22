import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Blog from './components/courses/Blog'
import Course from './components/courses/index'

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className='header'>
        <h3>Menu (Dùng NavLink để tạo menu)</h3>
        <ul className='menu'>
          <li>
            <NavLink to="/courses" activeClassName='active'>Danh sách khóa học</NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName='active'>Blog</NavLink>
          </li>
        </ul>
      </div>
      {/* Content */}
      <h3>Content</h3>
      <div className='content'>
        <Routes>
          <Route path='/courses' element={<Course />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
      <hr />
      {/* Footer */}
      <div className='footer'>
        <h3>Footer</h3>
      </div>
    </div>
  );
}

export default App;
