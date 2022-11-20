import classes from './EditorComponent.module.css'
// import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import {  useState } from "react";

const EditorComponent = (props) =>{

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  
    
  // const onEditorStateChange = (editorState) => {
  //   setEditorState(editorState);
  // };

    return(
        <>
        <div className={classes.editor_content}>
            <Editor
                toolbarHidden
                wrapperClassName={classes.wrapper_class}
                editorClassName={classes.editor_class}
                toolbarClassName={classes.toolbar_class}
                // onEditorStateChange={onEditorStateChange}
                onFocus={(event) => {}}
                onBlur={(event, editorState) => {}}
                onTab={(event) => {}}
                placeholder={props.placeholder}

                mention={{
                    separator: ' ',
                    trigger: '/',
                    suggestions: [
                      { text: 'APPLE', value: 'apple', url: 'apple' },
                      { text: 'BANANA', value: 'banana', url: 'banana' },
                      { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                      { text: 'DURIAN', value: 'durian', url: 'durian' },
                      { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                      { text: 'FIG', value: 'fig', url: 'fig' },
                      { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                      { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                    ],
                  }}

            />
            {/* <SlashCommand/> */}
            </div>
        </>      
    )
}

export default EditorComponent;
