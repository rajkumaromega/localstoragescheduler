import React,{useRef} from 'react';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom'
import './App.css'
const ContactList =(props)=>{
    console.log(props);
    const inputE1  = useRef("");   //
    const deleteContactHandler =(id)=>{
        props.getContactId(id);
    }

    const getSearchTerm =()=>{
        props.searchKeyword(inputE1.current.value);
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
        <div className="main">
            <h2>Contact List
               <Link to="/add">
                  <button className="ui button blue right">Add Contact</button>
               </Link>
            </h2>
           <div className="ui search">
               <div className="ui icon input">
                   <input 
                   ref={inputE1}
                   type="text " placeholder="search contacts " className="prompt" value={props.term} onChange={getSearchTerm}/>                          
               </div>
           </div>  
            <div className="ui celled list">{renderContactList}</div>
             
        </div>
    )
}
export default ContactList;