import React from 'react'
import { toast } from 'react-toastify';
export const Template = ({ title, elements }) => {

  const copyIcon = (e) => {

    let text = "",
      elem = e.target;

    if (elem.id) {
      text = elem.id.toString();
    } else if (elem.parentNode.id) {
      text = elem.parentNode.id.toString();
    } else if (elem.parentNode.parentNode.id) {
      text = elem.parentNode.parentNode.id.toString();
    }

    navigator.clipboard.writeText(text)

    toast.success("Copy to clipboard", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      position: toast.POSITION.BOTTOM_CENTER
    }
    );
  }

  return (
    <div className='template'>
      <div className="header">{title}</div>

      <div className="content">
        {elements.map((elem, index) => {
          return <div id={elem.props.name} className='element' onClick={e => copyIcon(e)} key={index}>{elem}</div>;
        })}
      </div>

    </div>
  )
}
