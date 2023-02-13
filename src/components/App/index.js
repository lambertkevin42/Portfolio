import { Route, Routes, useLocation} from 'react-router-dom';
import '../../components/App/app.scss';
import { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';

function App() {

  const location = useLocation();
  useEffect(()=> {
    window.scrollTo({
      top:0,
      left:0,
      behavior:'smooth'
    });
  }, [location]);

  return (
    <div className="app">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
