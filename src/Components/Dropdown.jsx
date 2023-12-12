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
  
  return (
    <div className={`dropdown ${isActive ? 'dropdown-active' : ''}`}>
      <div className="title-dropdown">
        <p>{title}</p>
        <i onClick={toggleStyle} 
        className={`fa-solid ${isActive ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        {/* className="fa-solid fa-chevron-up"></i> */}
      </div>
      <div className={`content-dropdown ${isActive ? 'content-dropdown-active' : ''}`}>
        <ul>
          <li>{content}</li>
        </ul>
      </div>
    </div>
  )
}