import React from 'react'

export default function Alert(props) {
    const capti = (stri) =>{
        return stri.charAt(0).toUpperCase() +
        stri.slice(1)
    }
  return (
    
     props.my_alert &&
      <div className={`alert alert-${props.my_alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capti(props.my_alert.type)}</strong> : {props.my_alert.msg}
      </div>
     
  )
}
