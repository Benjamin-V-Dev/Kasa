import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Error from "./pages/Error/Error"
import Accommodation from "./pages/Accommodation/Accommodation"
import Header from "./Components/root/Header"
import Footer from "./Components/root/Footer"
import data from './data.json'



export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/About" element={<About data={data}/>}/>
        <Route path="/Accommodation/:id" element={<Accommodation data={data}/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}