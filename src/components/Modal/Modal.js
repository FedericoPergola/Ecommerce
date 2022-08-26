import "./Modal.css"

const Modal = ({title, close, children}) =>{
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            {/* <button onClick={() => close(false)}> */}
                <svg onClick={() => close(false)} xmlns="http://www.w3.org/2000/svg" width="100" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            {/* </button> */}
            {children}
        </div>
    )
}

export default Modal;