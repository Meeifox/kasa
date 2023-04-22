import React, { useState } from 'react';
import './Collapse.scss';
import arrow from '../../../assets/images/prev.svg';

/**
La fonction Collapse est un composant qui représente une section de texte qui peut être réduite ou agrandie en cliquant sur un bouton (ici arrow).
@param {*} props - les propriétés passées au composant, qui contiennent le titre et le contenu de la section.
@returns - le composant Collapse qui affiche le titre et le contenu de la section, ainsi qu'un bouton d'expansion/réduction pour réduire ou agrandir la section.
*/
function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  const arrowClassName = isOpen ? 'collapse__arrow arrow-open' : 'collapse__arrow arrow-closed';
  const collapsClassName = isOpen ? 'collapseText__box box-open' : 'collapseText__box box-closed';
  
  return (
    <div className='collapse' >
      <button className={arrowClassName} onClick={toggle}>
        <h3>{props.title}</h3>
        <img src={arrow} alt='arrow'/>
      </button>
      {<div className={collapsClassName} onClick={toggle}>{props.children}</div>}
    </div>
  );
}

export default Collapse;

