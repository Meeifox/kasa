import './Footer.scss';
import kasaIcon from '../../assets/images/kasa.svg'

function Footer() {
    return (
        <div className='footer'>
        <h2><img src ={kasaIcon} alt='icon kasa'className='kasaIconBlanc'/></h2>
        <p>© 2020 Kasa. All rights reserved.</p>
        </div>
    )
}

export default Footer;