import { useContext } from 'react';
import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import FavouritesContext from '../store/favourites-context';

function MeetupItem(props){

    const favouriteCtx = useContext(FavouritesContext);

    const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);
    function toggleFavouriteHandler(){
        if(itemIsFavourite){
            favouriteCtx.removeFavourite(props.id);
        }else{
            favouriteCtx.addFavourite(
                {
                    id: props.id,
                    title: props.title,
                    address: props.address,
                    image: props.image,
                    description:props.description
                }); 
        }
    }

    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.image}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouriteHandler}>{itemIsFavourite ? 'Remove from Favourites' : 'To Favourites'}</button>
                </div>
            </li>
        </Card>
    )
}

export default MeetupItem;