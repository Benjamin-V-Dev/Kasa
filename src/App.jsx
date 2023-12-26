import {Routes, Route, useNavigate, useParams} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Accommodation from "./pages/Accommodation/Accommodation";
import Header from "./Components/root/Header";
import Footer from "./Components/root/Footer";
import data from './data.json';
import { useEffect } from 'react';


// fonction appelée pour la route des appartements selon l'id
function AccommodationWrapper() {
  const { id } = useParams();//Récupération de l'id de "data" via les props et assignation
  const navigate = useNavigate();//Hook de React-Routeur permetant la rediréction vers une URL

  //useEffect vérifie si l'id est un id valable
  useEffect(() => {
    const isValidId = data.some(item => item.id === id);//some  vérifie qu'au moins un élément de data à un id valable
    if (!isValidId) {
      navigate('/error/error.jsx');//Renvoi vers la page d'erreur si aucune id n'est correct
    }
  }, [id, navigate]);//Renvoi vers la page correspondant à l'id

  return <Accommodation data={data} />;//Génération de la page correspondante avec "data" en props
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
