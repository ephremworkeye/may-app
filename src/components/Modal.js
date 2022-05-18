import './Modal.css'
export default function Modal({children, handleClose, isSalesModal}) {
    return(
        <div className="modal-backdrop">
            <div className='modal' style={{
                border: "4px solid",
                borderColor: isSalesModal ? "#ff4500" : "#555",
                textAlign: "center"
                }}>
                {/* <h2>10% off coupon code</h2>
                <p>Use the code Hello at the checkout</p> */}
                {children}
                <button onClick={handleClose} className={isSalesModal ? "sales-btn" : ""}>
                    Close
                </button>
                
            </div>
        </div>
    )
}