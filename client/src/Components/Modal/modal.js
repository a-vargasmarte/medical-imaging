import React from 'react';
import RadioButton from './radioButtons';

const radioArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Modal = ({ modalTarget, onClick, onChange, imageValue }) => {
    return (
        <React.Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${modalTarget}`}>
                Annotate Photo
            </button>

            <div className="modal fade" id={modalTarget} tabIndex="-1" role="dialog" aria-labelledby={modalTarget} aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={modalTarget}>{imageValue}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {radioArray.map(radioValue => {
                                return <RadioButton key={`radio${radioValue}`} radioId={`radioID${radioValue}`} value={radioValue} onChange={onChange} />
                            })}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={onClick} value={imageValue}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Modal;