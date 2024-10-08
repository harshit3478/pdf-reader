import React from 'react'

export default function Toast({text} : {text: string}) {
  return (
    <div className="toast toast-top toast-end">
    {/* <div className="alert alert-info">
      <span>New mail arrived.</span>
    </div> */}
    <div className="alert alert-success">
      <span>{text}</span>
    </div>
  </div>
  )
}


