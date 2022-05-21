import React from 'react'
import { Modal } from '@material-ui/core';

const VisaCart = ({open,setOpen}) => {
    return ( 
        <Modal open={open} className="visa">
           <div className='row' onClick={() => setOpen(!open)} >
               hello
           </div>
        </Modal>
     );
}
 
export default VisaCart;