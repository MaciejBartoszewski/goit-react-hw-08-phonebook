import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './Home.module.css';

export const Home = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);

   return (
      <div className={css.container}>
         <h1 className={css.title}>Welcome to your Phonebook</h1>
         <h3>{isLoggedIn ? <UserMenu /> : 'You are now logged out'}{' '}</h3>
         <h2>If you want to check Your phonebook, please <NavLink className={css.nav} to="/login">Log In,</NavLink></h2>
         <h2>or if You are first time here, please <NavLink className={css.nav} to="/register">Register.</NavLink></h2>
      </div>
   );
};