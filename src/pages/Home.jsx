import { useSelector } from "react-redux";
import { selectLoggedIn } from "redux/auth/selectors";

export const Home = () => {
   const isLogged = useSelector(selectLoggedIn);

   return <div>Welcome to your Phonebook, {isLogged ? 'zalogowany' : 'wylogowany'}</div>;
};