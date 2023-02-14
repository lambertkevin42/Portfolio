import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleBurger } from '../../actions/burgeractions';
import '../HeaderNav/headernav.scss';

function HeaderNav() {
    const dispatch = useDispatch();
    const { burgerIsOpen } = useSelector((state) => state);
    const handleClick = () => {
        dispatch(toggleBurger());
    };

    return(
        <nav className="header-nav">
            <ul className={`${burgerIsOpen ? 'header-nav-links' : 'header-nav-links--closed'}`}>
                <NavLink
                    className="header-nav-link"
                    to=""
                >
                    About
                </NavLink>
                <NavLink
                    className="header-nav-link"
                    to=""
                >
                    lorem
                </NavLink>
                <NavLink
                    className="header-nav-link"
                    to=""
                >
                    lorem
                </NavLink>
            </ul>
            <button
                aria-label="toggleBurger"
                type="button"
                className={`${burgerIsOpen ? 'header-nav-button' : 'header-nav-button--closed'}`}
                onClick={handleClick}
            />
        </nav>
    );
}

export default HeaderNav;