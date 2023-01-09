// npm packages
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

// components
import Navbar from './Layouts/Navbar/Navbar';
import Home from "./pages/Home.js";
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import ViewUser from './components/Users/User';

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
