
import EditorComponent from "../components/DraftEditor/EditorComponent"; 
import FieldContent from "../components/Fields/FieldContent";
import classes from './Home.module.css';
import React, {useEffect, useState } from "react";
import SlashCommand from "../components/DraftEditor/SlashCommand";
function HomePage(){

    const [fieldList, setFieldList] = useState([]);

    useEffect( ()=>{
        addMoreField();
    },[]);

    const addMoreField = () => {
        setFieldList(fieldList.concat(<FieldContent key={fieldList.length} />));
     };

    return <>
    <section>
        <div className={classes.freeEditor}>
            <EditorComponent placeholder="Type '/' for quick actions or choose an option to get started"/>
        </div>
        <div className="FieldSection_wrapper">
            {fieldList}
        </div>
        <div className={classes.actions}>
            <button onClick={addMoreField} className={classes.Button}>Add Question</button>
        </div>
        <div className={classes.freeEditor}>
            <EditorComponent placeholder=""/>
        </div>
        <SlashCommand/>
        <div className="top_space"></div>
        <div className="bottom_space"></div>
        
    </section>
    </>
}

export default HomePage;