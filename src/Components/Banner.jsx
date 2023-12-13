import { useLocation } from 'react-router-dom';


export default function Banner({imageUrl, imageAlt, bannerContent}) {

  return (
    <div className="banner">
      <img src={imageUrl} alt={imageAlt} />
      <div className="banner-filter"></div>
      <h1>{bannerContent}</h1>
    </div>
  )
}