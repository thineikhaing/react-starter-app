
import EditorComponent from "../components/DraftEditor/EditorComponent"; 
import classes from './Home.module.css';
import React, { useContext } from "react";
import SlashCommand from "../components/DraftEditor/SlashCommand";
import FavouritesContext from "../components/store/favourites-context";
import useModal from "../components/ui/useModal";
import Modal from "../components/ui/Modal";

function HomePage(){

    const favCtx = useContext(FavouritesContext)

    const addMoreField = () => {
        favCtx.addField();
     };

    return <>
    <section>
        <Modal show={favCtx.isShowingModal} onCloseButtonClick={favCtx.toggleModal} />
        <div className={classes.freeEditor}>
            <EditorComponent placeholder="Type '/' for quick actions or choose an option to get started"/>
        </div>
        <div className="FieldSection_wrapper">
            {favCtx.formFields}
        </div>
        <div className={classes.actions}>
            <button onClick={addMoreField} className={classes.Button}>Add Question</button>
        </div>
        {/* <div className="button" onClick={toggleModal}>Open Modal</div> */}
        <div className={classes.freeEditor}>
            <EditorComponent placeholder=""/>
        </div>
        {/* <SlashCommand/> */}
        <div className="top_space"></div>
        <div className="bottom_space"></div>
        
    </section>
    </>
}

export default HomePage;