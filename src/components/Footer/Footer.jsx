import InstaImg from '../../assets/insta.svg';
import FaceImg from '../../assets/face.svg';
import WhatsImg from '../../assets/whats.svg';

const Footer = function() {
    return (
        <div className="footer">
            <h3>Ente em contato com a gente!</h3>
            <div className="social">
                <a href="https://www.instagram.com/infinitycoding_/"><img src={InstaImg} alt="Instagram"/></a>
                <a href="https://www.facebook.com/infinitycodingic"><img src={FaceImg} alt="Facebook" /></a>
                <a href="https://api.whatsapp.com/send?phone=5521971684632&text=Ol%C3%A1.%20Gostaria%20de%20um%20or%C3%A7amento%20de%20um%20projeto%20para%20meu%20neg%C3%B3cio."><img src={WhatsImg} alt="Whatsapp" /></a>        
            </div>
            
        </div>
        
    )
};

export {Footer}