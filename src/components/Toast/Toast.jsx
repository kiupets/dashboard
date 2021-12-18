import react from "react";
import './Toast.css';

export const Toast = ({text}) => {
  return ( 
    <div className='toast'>
      <p>{text}</p>
    </div>
  )
};