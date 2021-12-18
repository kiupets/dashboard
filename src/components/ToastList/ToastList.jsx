import React from "react";
import { Toast } from "../Toast/Toast";
import './ToastList.css';

const fakeData =  [
  { id: 1, text: 'Text load' },
  { id: 2, text: 'Text 3' },
  { id: 3, text: 'Text toast3' },
  { id: 4, text: 'Tx' },
];

const toasts = fakeData.map(toast => <Toast key={toast.id} text={toast.text}/>);

export const ToastList = () => {
  return (
    <div className="toastlist">
      {toasts}
    </div>
   )
}