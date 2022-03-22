import './index.css';
import {  Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing';
import Footer from './components/Footer';
import Languages from './components/Languages';
import History from './pages/History';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/history' element={<History />}/>
          <Route path='/languages' element={<Languages />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
