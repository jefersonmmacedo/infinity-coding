import LogoImg from '../../assets/logo.svg'

const Header = function() {
    return (
        <img className="img" src={LogoImg} alt="Logo" />
    )
};

export {Header}