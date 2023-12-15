import {Routes, Route, useNavigate, useParams} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Accommodation from "./pages/Accommodation/Accommodation";
import Header from "./Components/root/Header";
import Footer from "./Components/root/Footer";
import data from './data.json';
import { useEffect } from 'react';

function AccommodationWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isValidId = data.some(item => item.id === id);
    if (!isValidId) {
      navigate('/error/error.jsx');
    }
  }, [id, navigate]);

  return <Accommodation data={data} />;
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/About" element={<About data={data}/>}/>
        <Route path="/Accommodation/:id" element={<AccommodationWrapper />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}
