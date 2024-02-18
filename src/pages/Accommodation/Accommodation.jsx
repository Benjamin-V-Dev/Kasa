import { Helmet } from 'react-helmet';
import Filter from "../../Components/Tag";
import Slider from "../../Components/Slider";
import { useParams, useNavigate } from 'react-router-dom';
import Rank from "../../Components/Rank";
import Dropdown from "../../Components/Dropdown";
import { useEffect } from 'react';

export default function Accommodation({data}) {
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    if (!data.some(item => item.id === id)) {
      navigate('/404'); // Redirection vers la page d'erreur si l'ID n'est pas valide
    }
  }, [id, data, navigate]);

  let element = data.find(item => item.id === id);

  if (!element) {
    return null; // Renvoie null si l'élément n'est pas trouvé (en attendant la redirection)
  }

  return (
    <>
      <Helmet>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Kasa | Hébergement</title>
        <meta name="description" content="Découvrez notre hébergement unique et confortable en France. Réservez dès maintenant pour une expérience inoubliable." />

        <meta property="og:title" content="Hébergement unique en France - Réservez dès maintenant" />
        <meta property="og:description" content="Découvrez notre hébergement unique et confortable en France. Réservez dès maintenant pour une expérience inoubliable." />
        <meta property="og:image" content="/public/accommodation.png" />
        <meta property="og:url" content="/logo.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Hébergement unique en France - Réservez dès maintenant" />
        <meta name="twitter:description" content="Découvrez notre hébergement unique et confortable en France. Réservez dès maintenant pour une expérience inoubliable." />
        <meta name="twitter:image" content="./public/accommodation.png" />
        <meta name="twitter:card" content="Hébergement en France" />
      </Helmet>

      <div className="accommodation">
          {/* Début du Slider */}
          <Slider id={element.id} pictures={element.pictures}/>

          {/* Début de la séction titres et profil */}
          <div className='headings-and-profile'>

            <div className='headings'>
              <h2>{element.title}</h2>
              <p>{element.location}</p>
              <div className="master-tags">
                {element.tags.map((tag, index) => (
                  <Filter key={index} tag={tag} />
                  ))}
              </div>
            </div>

            <div className='profile'>
              <div className="profile-host">
                <p>{element.host.name}</p>
                <img src={element.host.picture} alt="" />
              </div>
              <div className="master-rate">
                <Rank rank={element.rating}/>
              </div>
            </div>
          </div>


          {/* Début des dropdown */}
          <div className="layout-dropdown-accommodation">
            <div className="master-dropdown">
                <Dropdown title={"Description"} content={element.description}/>
                <Dropdown title={"Équipements"} content={element.equipments}/>
            </div>
          </div>
      </div>
    </>
  )
}