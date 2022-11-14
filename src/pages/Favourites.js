import {useContext} from 'react';
import FavouritesContext from '../components/store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage(){

    const favouriteCtx = useContext(FavouritesContext);

    let content;

    if (favouriteCtx.totalFavourites === 0){
        content = <p> You go no favourites yet. Start adding some? </p>
    }else{
        content = <MeetupList meetups={favouriteCtx.favourites}/>
    }

    return <section>
        <h1> My favourites </h1>
        {content}
    </section>
}

export default FavouritesPage;