import ReactDOM from 'react-dom';
import classes from "./Modal.module.css"

const Modal = ({ show, onCloseButtonClick }) => {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-wrapper" onClick={onCloseButtonClick}>
      <div className="modal">
        <div className="body">
          Click on the close button to close the modal.
        </div>
        <div className="footer">
          <button className={classes.button} onClick={onCloseButtonClick}>Close Modal</button>
        </div>
      </div>
    </div>
    , document.body
  );
};

export default Modal;