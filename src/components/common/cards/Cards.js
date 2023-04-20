import React from 'react';
import { Link } from "react-router-dom";
import './Cards.scss';


function Cards({data}) {
  
  return (
    <>
    {data.map((lot)=>
      <div className="cardPreview" key={lot.id}>
        <Link to = {`/lots/${lot.id}`} className="cardLink">
          <img src={lot.cover} alt={lot.title} className="cardCover"/>
          <h2 className="cardTitle">{lot.title}</h2>
        </Link>
      </div>)
    }
    </>
    );
  }
  
  
  export default Cards;