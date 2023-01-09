// npm packages
import { BrowserRouter as Router,  Route, Routes, useLocation } from 'react-router-dom';

// components
import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home.js";
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/User';

// styles
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/add" element={<AddUser/>} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="/users/view/:id" element={<ViewUser />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
