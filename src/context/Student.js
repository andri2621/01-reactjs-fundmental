
import React from 'react';
import StudentContext from './StudentContext';

export const Student = () => (
    <StudentContext.Consumer>
        {context => {
                context.students.map(item => {

                    return (
                        <>
                            <h3>Nim : <span>{item.nim}</span></h3>
                            <h3>Nama : <span>{item.nama}</span></h3>
                            <h3>IPK : <span>{item.ipk}</span></h3>
                            <h3>Kota : <span>{item.kota}</span></h3>
                            <h3>Vote : <span>{item.vote}</span></h3>
                        </>
                    )
                })
        }}
    </StudentContext.Consumer>
)
