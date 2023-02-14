import '../Header/header.scss';
import HeaderNav from '../HeaderNav';

function Header() {
    return (
        <div className="header">
            <p className="header-text"><strong>KL</strong></p>
            <HeaderNav/>
        </div>
    );
}

export default Header;