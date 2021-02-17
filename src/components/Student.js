import React from 'react'

export const Student = (props) => {
    return (
        <div>
           <h3>Nim : <span>{props.nim}</span></h3>
           <h3>Nama : <span>{props.nama}</span></h3> 
        </div>
    )
}

export const Teacher =()=>{
    return (
        <div>
           <h3>Nim : <span>911</span></h3>
           <h3>Nama : <span>Dafa</span></h3> 
        </div>
    )
}
