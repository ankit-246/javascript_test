// Apply, Call, & Bind in Js 

let userDetails={
    name: "Ankit kumar",
    Age:26,
    Designation: "Enginner",
    printDetails: function(){
        console.log(this)

    }
}
userDetails.printDetails();

let userDetails2={
    name: "Akki kumar",
    Age:28,
    Designation: "Enginner",
    
}
userDetails.printDetails.call(userDetails2);