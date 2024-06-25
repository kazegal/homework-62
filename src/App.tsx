import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './container/Home/Home';
import AboutUs from './container/AboutUs/AboutUs';
import Contacts from './container/Contacts/Contacts';
import Portfolio from './container/Portfolio/Portfolio';
import AboutCountries from './container/AboutCountries/AboutCountries';
import ToDoList from './container/ToDoList/ToDoList';
import './App.css';

const App = () => (
    <Router>
      <>
        <header>
          <Toolbar />
        </header>
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/portfolio" element={<Portfolio />}>
              <Route path="about-countries" element={<AboutCountries />} />
              <Route path="to-do-list" element={<ToDoList />} />
            </Route>
            <Route path="*" element={<h1 className="mt-5 text-center">Not Found!</h1>} />
          </Routes>
        </main>
      </>
    </Router>
);

export default App;
