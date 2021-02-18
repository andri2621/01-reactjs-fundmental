const data =[
    {
        nim : 6131,
        nama : "Andi",  
        vote : 4
    },
]

let x = {
    nim : 6132,
    nama : "Agus",  
    vote : 4
}

let y = {
    nim : 6133,
    nama : "Asep",  
    vote : 4
}

let students = data;
students = [...students,x];
students = [...students,y];
console.log(students);

let listStudent = [...students.map( row =>{
    if (row.nim === 6133){
        row.vote = row.vote +2;
        return row;
    }else{
        return row;
    }
})];

console.log(listStudent);
console.log("end");