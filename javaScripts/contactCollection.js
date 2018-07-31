"use strict";


let contacts = [
    {
      name: "Maxwell Nutter",
      phone: "615-300-2969",
      address: "2008 white ave"
    },
{
    name: "wyatt Nutter",
      phone: "615-300-2969",
      address: "2008 white ave"
},
{
    name: "Andrew Nutter",
    phone: "615-300-2969",
    address: "2008 white ave"

}
];

localStorage.setItem ("contacts",JSON.stringify(contacts));
function getContacts(){
    return JSON.parse(localStorage.getItem("contacts"));
}

module.exports = getContacts;





