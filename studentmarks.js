// let students=[
//     {name:"Hindu", marks:97},
//     {name:"Jhon", marks:90},
//     {name:"Ell", marks:89}
// ];
// for(let i=0 ; i<students.length;i++){

//     let total=0;

//     for(let j=0 ; j<students[i].marks.length;j++){
//         total = total+students[i].marks.length[j];

        
//     }

//     let avg=total/students[i].marks.length;

//     console.log("Student Name is : ",students[i].name);
//     console.log("Average is : ",avg);

// }


let students = [
    { name: "Hindu", marks: 97 },
    { name: "Jhon", marks: 90 },
    { name: "Ell", marks: 89 }
];

for (let i = 0; i < students.length; i++) {
    let avg = students[i].marks; // just the marks itself
    console.log("Student Name is:", students[i].name);
    console.log("Average is:", avg);
}

