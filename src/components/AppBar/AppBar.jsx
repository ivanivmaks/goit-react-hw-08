import  Navigation  from "../Navigation/Navigation";
import  AuthNav  from "../AuthNav/AuthNav";
import  UserMenu  from "../UserMenu/UserMenu";
import { useAuth } from "../../hooks/useAuth";
import css from './AppBar.module.css'

export default function AppBar() {
     const { isLoggedIn } = useAuth();

   return (
     <header className={css.header}>
       <Navigation />
       {isLoggedIn ? <UserMenu /> : <AuthNav />}
     </header>
   );
}
