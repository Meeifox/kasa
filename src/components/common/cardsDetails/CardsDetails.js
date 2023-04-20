
import React from "react";
import lotsData from "../../../data/lotsData.json";
import './CardsDetails.scss';
import renderStars from "../renderStars/renderStars";
import { useParams } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import Collapse from "../collapse/Collapse";


function CardsDetails() {
  const { id } = useParams();
  const lot = lotsData.find(lot => lot.id === id);
  
  return (
    <div className="card-details">
      <Carousel images={lot.pictures} />    
        <div className="display-row">
          <div className="display-colum">
          <h2 className="lots-title">{lot.title}</h2>
          <div className="lots-location">{lot.location}</div>
        </div>

        <div className="display-colum">
          <div className="lots-host">
            <p className="host-name">{lot.host.name}</p>
            <img className="host-picture" src={lot.host.picture} alt={lot.host.name}/>
          </div>
            <div className="rating"> {renderStars(lot.rating)}</div>
          </div>
        </div>
        <div className="display-row">
          <div className="lots-tags">
                {lot.tags.map((tags)=>
                  <button key={tags}>{tags}</button>)}
                </div>
        </div>
          <div className="homeCollapse">
            <div className="lots-description">
              <Collapse title="Description">
              <p>{lot.description}</p>
              </Collapse>            
            </div>
            
            <div className="lots-equipements">
            <Collapse title="Equipements">{lot.equipments.map((equipement)=>
              <li key={equipement}>{equipement}</li>)}
              </Collapse>  
              
                      
            </div>
          </div>
        </div>
        );
      }
      
      export default CardsDetails;
      