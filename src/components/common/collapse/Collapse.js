import React, { useState } from 'react';
import './Collapse.scss';
import arrow from '../../../assets/images/prev.svg';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  const arrowClassName = isOpen ? 'collapse__arrow arrow-open' : 'collapse__arrow arrow-closed';
  const collapsClassName = isOpen ? 'collapseText__box box-open' : 'collapseText__box box-closed';
  
  return (
    <div className='collapse'>
      <button className={arrowClassName} onClick={toggle}>
        <h3>{props.title}</h3>
        <img src={arrow} alt='arrow'/>
      </button>
      {isOpen && <div className={collapsClassName}>{props.children}</div>}
    </div>
  );
}

export default Collapse;

