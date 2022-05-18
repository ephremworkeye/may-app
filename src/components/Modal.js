import './Modal.css'
export default function Modal({children, handleClose}) {
    return(
        <div className="modal-backdrop">
            <div className='modal'>
                {/* <h2>10% off coupon code</h2>
                <p>Use the code Hello at the checkout</p> */}
                {children}
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}