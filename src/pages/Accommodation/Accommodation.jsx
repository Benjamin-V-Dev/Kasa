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
  )
}