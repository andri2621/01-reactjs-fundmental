import React, { Component } from 'react'
import {studentData} from './StudentData';
import { Student } from './Student';

export default class ListStudent extends Component {  
    state = {
		students: [],
        search : "",
        select : "",
        isSelected: false
    }

    componentDidMount(){
        this.setState({
            students : studentData 
        })
    }

    // setiap kali user input keyboard, maka value akan disimpan di state search
    onHandleChange=(e)=>{
        this.setState({
            search : e.target.value,
            isSelected: false
        })
        //console.log(e.target.value);
        console.log(this.state.search);
    }

    onHandleSelect = (e)=>{
        // ternary operation
        const value = e.target.selectedIndex !== 0 ? e.target.options[e.target.selectedIndex].value : null;
	
        if (value !== null){
            this.setState({
                select : value,
                isSelected: true
            })

            console.log(this.state.select);
        }

    }

    render() {
        const {students,search,select,isSelected} = this.state;
        return (
            <>
               <div>
                    <input placeholder="Search Student..." value={search} onChange={this.onHandleChange}/>
                    <select value ={select} onChange={this.onHandleSelect}>
						<option value="">Filter By</option>
						<option value="nama">Nama</option>
						<option value="ipk">Ipk</option>
						<option value="kota">Kota</option>
                        <option value="vote">Vote</option>
					</select>
                </div>
                <div>
                {
                  

                  !isSelected ? (
                    students
                    .filter( f => f.nama.toLowerCase().includes(search.toLowerCase()))
                    .map(value =>{
                        return ( <Student 
                            nim = {value.nim}
                            nama = {value.nama}
                            ipk = {value.ipk}
                            kota = {value.kota}
                            vote = {value.vote}
                        />)
                    }) )
                    :
                    (
                    students
                    .sort((a,b) => {
                        if (select === 'nama') {
                            return (''+a.nama).localeCompare(b.nama);
                        }
                        else if (select === 'ipk') {
                            return b.ipk - a.ipk;
                        }
                        else if (select === 'kota') {
                            return (''+a.kota).localeCompare(b.kota);
                        }
                        else if (select === 'vote') {
                            return b.vote - a.vote;
                        }else{
                            return (''+a.nama).localeCompare(b.nama);
                        }
                        
                    })
                    .map(value =>{
                        return ( <Student 
                            nim = {value.nim}
                            nama = {value.nama}
                            ipk = {value.ipk}
                            kota = {value.kota}
                            vote = {value.vote}
                        />)
                    }))
                }
                </div>
            </>
        )
    }
}
