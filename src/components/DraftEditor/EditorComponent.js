import classes from './EditorComponent.module.css'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SlashCommand from "./SlashCommand";
import {  useState } from "react";

const EditorComponent = () =>{

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
    
  const onEditorStateChange = (editorState) => {
    console.log(editorState);
    setEditorState(editorState);
  };

    return(
        <>
        <div className={classes.editor_content}>
            <Editor
                toolbarOnFocus
                wrapperClassName={classes.wrapper_class}
                editorClassName={classes.editor_class}
                toolbarClassName={classes.toolbar_class}
                onEditorStateChange={onEditorStateChange}
                onFocus={(event) => {}}
                onBlur={(event, editorState) => {}}
                onTab={(event) => {}}
                placeholder="Type '/' for quick actions or choose an option to get started"

                // mention={{
                //     separator: ' ',
                //     trigger: '@',
                //     suggestions: [
                //       { text: 'APPLE', value: 'apple', url: 'apple' },
                //       { text: 'BANANA', value: 'banana', url: 'banana' },
                //       { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                //       { text: 'DURIAN', value: 'durian', url: 'durian' },
                //       { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                //       { text: 'FIG', value: 'fig', url: 'fig' },
                //       { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                //       { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                //     ],
                //   }}

            />
            <SlashCommand/>
            </div>
        </>      
    )
}

export default EditorComponent;

// import React from "react";
// import { Editor, EditorState } from "draft-js";
// import "draft-js/dist/Draft.css";
// import SlashCommand from "./SlashCommand";

// export default function EditorComponent() {
//   const [editorState, setEditorState] = React.useState(() =>
//     EditorState.createEmpty()
//   );

//   const editor = React.useRef(null);
//   function focusEditor() {
//     editor.current.focus();
//   }

//   return (
//     <div
//       style={{ padding: "12px", cursor: "text" }}
//       onClick={focusEditor}
//     >
//         <Editor
//           ref={editor}
//           editorState={editorState}
//           onChange={setEditorState}
//           placeholder="Type '/' for quick actions or choose an option to get started"
//         />
//         <SlashCommand/>
//     </div>
//   );
// }