import React from 'react'

export const Student = (props) => {
    return (
        <div>
            <h3>Nim : <span>{props.nim}</span></h3>
            <h3>Nama : <span>{props.nama}</span></h3>
            <h3>IPK : <span>{props.ipk}</span></h3>
            <h3>Kota : <span>{props.kota}</span></h3>
        </div>
    )
}