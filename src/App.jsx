import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home';
import UploadFiles from './Pages/UploadFiles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/uploadFile' element={<UploadFiles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
