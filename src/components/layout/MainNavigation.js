import {Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'
import { useContext} from 'react';
import FavouritesContext from '../store/favourites-context';

function MainNavigation(){
    const favouriteCtx = useContext(FavouritesContext);

    return(
        <header className={classes.header}>
        <div> <Link style={{ opacity: 1}} to='/'> Fair Form Builder</Link> </div>
        <nav>
            <ul>
                <li><NavLink to='/'> Home</NavLink></li>
                <li><NavLink to='/meetups'> All Meetups</NavLink></li>
                <li><NavLink to='/new-meetup'> New Meetups</NavLink></li>
                <li><NavLink to='/favourites' > 
                    My Favourites
                    <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
       
}

export default MainNavigation;