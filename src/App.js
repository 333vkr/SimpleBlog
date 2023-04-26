import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { BlogList } from './pages/BlogList';
import { Blog } from './pages/Blog';
import './assets/css/globals.css'
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/list'  element={<BlogList/>}/>
      <Route path='/blog'  element={<Blog/>}/>
    </Routes>
    </div>
  );
}

export default App;
