import { createContext, useState } from "react";
import FieldContent from "../Fields/FieldContent";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup)=>{},
    removeFavourite: (meetupId)=>{},
    itemIsFavourite: (meetupId)=>{},
    formFields: [],
    addField: ()=>{},
    removeField: (fieldId)=>{},
});

export function FavouritesContextProvider(props){

    const [userFavourites, setUserFavourites] = useState([]);
    const [userFields, setUserFields] = useState([]);

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.concat(favouriteMeetup)
        })
    }

    function removeFavouriteHandler(meetupId){
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavouriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId)
    }

    function addFieldHandler(){
        
        setUserFields((prevFields) =>{
            return prevFields.concat((<FieldContent key={userFields.length} index={userFields.length} />))
        })

    }

    function removeFieldHandler(fieldId){ 
        setUserFields((prevFields) =>{
            return prevFields.filter(field => field.key !== fieldId);
        })
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        formFields: userFields,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler,
        addField: addFieldHandler,
        removeField: removeFieldHandler
    }; 

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;