import * as React from "react";
import './Home.scss';
import bannerImage from '../../assets/images/banner.jpg';
import Cards from "../../components/common/cards/Cards";
import lotsData from "../../data/lotsData.json";


function Home() {
    return(
        <main className="Home">
            <section className="Banner">
                <div className="BannerOverlay">
                    <p className="BannerQuote">Chez vous, partout et ailleurs</p>
                </div>
            <img src ={bannerImage} alt="Falaise"/> 
            </section>
        
            <section>
                <div className="cardContainer">                
                    <Cards data={lotsData}/>                
                </div>
            </section>
        </main>
        )
    }
    
    
    export default Home;