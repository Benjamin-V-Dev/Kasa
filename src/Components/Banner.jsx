import { useLocation } from 'react-router-dom';


export default function Banner() {

  const location = useLocation();
  let imageUrl;
  let imageAlt;
  let bannerContent;

  if (location.pathname === "/") {
    imageUrl = "public/banner1.png";
    imageAlt = "Paysage de côte sauvage";
    bannerContent ="Chez vous, partout et ailleurs";

  } else if (location.pathname === "/About") {
    imageUrl = "public/banner2.png";
    imageAlt = "Paysage de montagne";
    bannerContent ="";
  }

  return (
    <div className="banner">
      <img src={imageUrl} alt={imageAlt} />
      <div className="banner-filter"></div>
      <h1>{bannerContent}</h1>
    </div>
  )
}