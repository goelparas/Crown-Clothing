let doc = {
  names:   "paras", 
  dresscode : "Abes",
  timing :"9-4:30"
}
dep ="Cs";

// // // const {...otherprops}=  doc;

// // let names  = "chetan "

// // // console.log({names ,...doc}); 

// display(doc);

// console.log(doc.names)
// // // {}  used for destructuring and passing as an object too 

// function display (doc)
// {
//    doc.names  = "Shubh"
//   console.log();


// }

// // // const value  ={doc , names};



// // // value.doc.dresscode ="IIT";

// // // console.log(value);





let {dresscode} = doc;

dresscode = "IIT";
console.log(doc.dresscode);

