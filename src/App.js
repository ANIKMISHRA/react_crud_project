// components
import Navbar from './Layouts/Navbar/Navbar';
import ComponentsRoutes from './Routes/ComponentsRoutes';

// styles
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {

  return (
      <div className="App">
        <Navbar />
        <ComponentsRoutes />
      </div>
  );
}
export default App;
