import { useState } from 'react';

export default function Dropdown({title, content}) {

  const [isActive, setIsActive] = useState(true);

  // Fonction pour basculer l'état
  const toggleStyle = () => {
    setIsActive(!isActive);
    if (isActive === true) {
      // console.log("ouvert");
    }else{
      // console.log("fermé");
    }
  };

  // Fonction pour analyser "content"

  let contentArray = [];

  if (typeof content === 'object' && content !== null) {
    // Transformer les valeurs de l'objet en un tableau
    contentArray = Object.values(content);
  } else if(typeof content ==='string' || typeof content ==='number'){
    // Transformer les valeurs autres en un tableau
    contentArray = [content];
  }

  return (
    <div className={`dropdown ${isActive ? 'dropdown-active' : ''}`}>
      <div onClick={toggleStyle} className="title-dropdown">
        <p>{title}</p>
        <i onClick={toggleStyle} 
        className={`fa-solid ${isActive ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </div>
      <div className={`content-dropdown ${isActive ? 'content-dropdown-active' : ''}`}>
      <ul>
        {contentArray.map((li, index) => (
          <li key={index}>{li}</li>
        ))}
      </ul>
      </div>
    </div>
  )
}