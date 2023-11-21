
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the addition of Routes

import Ckeditor from './Components/Ckeditor';

function App() {
  return (
    <div className="App">
      <figure class="image"></figure>
      <Router>
        <Routes>
          
          <Route path="/" element={<Ckeditor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;