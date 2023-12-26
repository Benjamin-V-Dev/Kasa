import { useState } from 'react';

export default function Dropdown({title, content}) {

  /* On récupére ci-dessus les props de l'élément parent et on les utilise ci-dessous */

  /* Utilisation du Hook useState pour analyse l'état du dropdown */
  const [isActive, setIsActive] = useState(true);

  // Fonction pour basculer l'état
  const toggleStyle = () => {setIsActive(!isActive);};

  
  // Initialisation de la variable
  let contentArray = [];
  
  // Analyse de "content"
  if (typeof content === 'object' && content !== null) {
    // Si c'est un objet, transformation en tableau dans contentArray
    contentArray = Object.values(content);
  } else if(typeof content ==='string' || typeof content ==='number'){
    // Si c'est un string ou number, transformation en tableau dans contentArray
    contentArray = [content]; //Parcour de contentArray dans un .map ("li" plus bas)
  }

  return (
    <div className={`dropdown ${isActive ? 'dropdown-active' : ''}`}>
      <div className="title-dropdown">
        <p>{title}</p>
        <i onClick={toggleStyle} 
        className={`fa-solid ${isActive ? 'fa-chevron-up' : 'fa-chevron-up rotate'}`}></i>
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