import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/actions";
import { useAuthUser } from "../../hooks/useAuthUser";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLogged } = useAuthUser();

    const handleLogout = () => {
        navigate("/login");
        dispatch(logOut());
    };
    return (
        <header>
            <nav style={{ display: 'flex', gap: '4px' }}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                {isLogged ? (
                    <button onClick={handleLogout}>Log out</button>
                ) : (
                    <>
                        <NavLink to='/login'>Log in</NavLink>
                        <NavLink to='/register'>Register</NavLink>
                    </>
                )}
            </nav>
        </header>

    );
};