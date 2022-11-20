
import EditorComponent from "../DraftEditor/EditorComponent";
import Select from 'react-select';
import classes from './FieldContent.module.css'
import FavouritesContext from "../store/favourites-context";
import React, { useContext } from "react";

  const options = [
    {icon: "text_fields",value: "Text", label: "Text"},
    {icon: "email",value: "Email", label: "Email"},
    {icon: "link",value: "URL", label: "URL"},
    {icon: "flaky",value: "Yes / No", label: "Yes / No"},
    {icon: "palette",value: "Color Picker", label: "Color Picker"},
    {icon: "looks_one",value: "Number", label: "Number"},
    {icon: "smartphone",value: "Phone Number", label: "Phone Number"},
    {icon: "home",value: "Address", label: "Address"},
    {icon: "public",value: "Country", label: "Country"},
    {icon: "insert_invitation",value: "Appointment", label: "Appointment"},
    {icon: "calendar_today",value: "Date", label: "Date"},
    {icon: "schedule",value: "Time", label: "Time"},
    {icon: "check_box",value: "Multiple Choice", label: "Multiple Choice"},
    {icon: "arrow_drop_down",value: "Dropdown", label: "Dropdown"},
    {icon: "star",value: "Rating", label: "Rating"},
    {icon: "portrait",value: "Image Upload", label: "Image Upload"},
    {icon: "attach_file",value: "File Upload", label: "File Upload"},
    {icon: "gesture",value: "Signature", label: "Signature"}
];

const FieldContent =(props)=>{

    const favCtx = useContext(FavouritesContext)
    

    const removeFormField = (event) => {
        console.log(event.target.getAttribute('data-index'))
        favCtx.removeField(event.target.getAttribute('data-index'))
        
     };

    const openModal =()=>{
        console.log("toggle Modal")
    }

    return(
        <>
        <div className={`FieldWrapper ${classes.Field}`}  data-index={props.index}>
            <div className={classes.Field_Header}>
                <div className={classes.Field_Header_label}>
                    <EditorComponent placeholder="What is your question?"/>
                </div>
                <div className={classes.Field_types}>
                    <div className={classes.Select}>
                        <Select options={options} defaultValue={options[0]} isSearchable/>
                    </div>
                </div>
            </div>
            <div className={classes.Field_hint}>
                <EditorComponent placeholder="Add some help text"/>
            </div>
            <div className={classes.Field_controls}>
                <span className="material-icons" >drag_indicator</span>
                <span className="material-icons" onClick={favCtx.toggleModal} data-hover="Settings">settings</span>
                <span onClick={removeFormField} data-index={props.index} data-hover="Remove" className="material-icons">close</span>
            </div>
        </div>
        
        </>
    )

}

export default FieldContent;