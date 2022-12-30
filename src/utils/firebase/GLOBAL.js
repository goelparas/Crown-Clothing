let doc = {
  names:   "paras", 
  dresscode : "Abes",
  timing :"9-4:30"
}

// dep ="Cs";

//  let names  = "chetan "
// console.log({names ,...doc}); 
// display(doc);
// console.log(doc.names)
//  {}  used for destructuring and passing as an object too 

// function display (doc)
// {
// doc.names  = "Shubh"
// console.log();
// }

//  const value  ={doc , names};



//  value.doc.dresscode ="IIT";
//  console.log(value);

// let {dresscode} = doc;
// dresscode = "IIT";
// console.log(doc.dresscode);

// let cart  =[{a:"a"},{b:"b"},{c:"c"}];

// let arr  = [...cart ,{...doc ,quantity:"1"}];

// console.log(arr);

/** DESTRUCTURING CREATE NEW MEMORY WHEN ASSIGN BY THE VARIBLE */
// let {names} = doc;
// names = "goel";
// console.log(doc.names);

/* Reduce Function***/
// let arr=  [{name:"paras"} ,{name:"Nonu"}, {name:"Shubh"},{name:"Chetan"}];
// let element  = arr.reduce((total,e)=>{
//   return (total+e,0);
// })
// console.log(element);

/**MAP****/
//let arr=  [{name:"paras"} ,{name:"Nonu"}, {name:"Shubh"},{name:"Chetan"}];
//  let x = arr.map((e)=>{return e.name !=="Shubh"})
// x[0].name = "PARAS";
// console.log(x,arr);

/* FILTER METHOD */
// let a  =[{names:"Paras",surName:"Goel"},{names:"Paras",surName:"Goel"},{names:"Paras",surName:"Rastogi"}];
// let x =
// a.filter((item)=>{return item.surName==="Goel"});

// x[1].surName = "G";

// console.log(x , a );
