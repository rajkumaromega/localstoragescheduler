import React from 'react';
import ContactCard from './ContactCard';
const ContactList =(props)=>{
    console.log(props);
   //
    const deleteContactHandler =(id)=>{
        props.getContactId(id);
    }
    // we are iterating through list of contact which we have in state variable contacto throguh map
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div className="item">
               {/* everytime we iterate we call this contactCard and send the props to the component */}
                <ContactCard 
                sendContact={contact} 
                //clickHandler we passed to the ContactCard for passing id as func as prop taking that id 
                //and passing it but cannot see deleteContactHandler with id and this function pass that 
                //id to the getContactId which is app.js function
                clickHandler= {deleteContactHandler}
                key={contact.id}
                />

            </div>
                
        );
    })

    //
    return(
        <div>
           <div className="ui celled list">{renderContactList}</div>
        </div>
    )
}
export default ContactList;