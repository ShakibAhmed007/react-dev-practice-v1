import React from 'react';
import Button from './Button';

const ConfirmationModal = props => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{props.message}</div>
          <div className="modal-footer">
            <Button data-dismiss="modal">Close</Button>
            <Button type="button">Save changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
