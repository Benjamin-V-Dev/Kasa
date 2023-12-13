import Filter from "../../Components/Tag";
import Slider from "../../Components/Slider";
import {useParams} from 'react-router-dom'
import Rank from "../../Components/Rank";

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
          </div>

          <div className='profile'>
            <p>{element.host.name}</p>
            <img src={element.host.picture} alt="" />
          </div>

        </div>

        {/* Début de la séction tags et notes */}
        <div className="tags-and-rate">
          <div className="master-tags">
            {element.tags.map((tag, index) => (
              <Filter key={index} tag={tag} />
            ))}
          </div>
          <div className="master-rate">
              <Rank rank={element.rating}/>
          </div>

        </div>
    </div>
  )
}