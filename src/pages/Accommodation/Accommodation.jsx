import Filter from "../../Components/Tag";
import Slider from "../../Components/Slider";
import {useParams} from 'react-router-dom'
import Rank from "../../Components/Rank";
import Dropdown from "../../Components/Dropdown";

export default function Accommodation({data}) {

  let {id} = useParams()
  let idTarget = id;
  let element = data.find(item => item.id === idTarget);

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