import bannerImage from '../../assets/images/aboutBanner.jpg';
import Collapse from '../../components/common/collapse/Collapse';
import './About.scss'

function About(){
    return (
        <main className='about'>
        <section className="Banner">
            <img src={bannerImage} alt="Montagne" />
        </section>
        <section className='collapsModule'>
                    <Collapse title="Fiabilité">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu luctus quam. Nullam mattis egestas justo viverra ultrices. Nam vel mauris at neque euismod volutpat quis blandit enim. Etiam quis massa diam. In ornare neque enim, nec porta lorem pellentesque a. Donec malesuada faucibus cursus. Curabitur iaculis eu mauris nec fermentum.</p>
                    </Collapse>
                    <Collapse title="Respect">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </Collapse>
                    <Collapse title="Service">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu luctus quam. Nullam mattis egestas justo viverra ultrices. Nam vel mauris at neque euismod volutpat quis blandit enim. Etiam quis massa diam. In ornare neque enim, nec porta lorem pellentesque a. Donec malesuada faucibus cursus. Curabitur iaculis eu mauris nec fermentum.</p>
                    </Collapse>
                    <Collapse title="Sécurité">
                        <p>Nunc vitae eros mattis, dignissim nunc ut, congue est. Nunc in nisi massa. Donec at erat vehicula, eleifend velit rhoncus, sagittis nunc. Mauris volutpat id neque in malesuada. Nulla congue metus ac ex facilisis, id suscipit velit iaculis. Vestibulum dolor tellus, facilisis at sem id, ullamcorper gravida mauris. Donec ac condimentum lectus. Proin enim turpis, consectetur eget scelerisque ac, ultricies at sem. Donec pulvinar et metus non porta. Aenean tortor erat, imperdiet nec luctus in, congue mollis nisi. Nulla est eros, dapibus ut posuere ut, convallis at quam.</p>
                    </Collapse>
            </section>
            </main>
    )
};

export default About;