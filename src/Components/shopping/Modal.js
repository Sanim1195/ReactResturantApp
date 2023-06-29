import React from 'react'
import  ReactDOM  from 'react-dom';
import './Modal.css';


const Backdrop = () => {
    return (
        <div className='backdrop' />
    )
};

const ModalOverlay = (props) => {
    return (
        <div className='modal'>
            <div className='product-description'>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');


export default function Modal() {

    return (
       
        // Using portal to display the modal component above other component. Check index.html

        // creating backdrop and overlay and use portal

        <>
            {/* return overlays and backdrop here using React-DOM createPortal */}

            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>
                <div>
                    <p>
                        Product description lies here

                    </p>
                </div> </ModalOverlay>, portalElement)}

        </>


    )
}
