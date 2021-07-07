import React from 'react';
import user from '../images/user.png'
const ContactCard =(props)=>{
    //we accessed to the props values from contactList 
    const {id,name,email} = props.sendContact;
     console.log(name)
    return (
       
        <div className="item">

            {/* design for list of contacts below form  */}
            <img className="ui avatar image" src={user} alt= "user"/>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="header">
                        {email}
                    </div>



                    {/* deleting icon  */}
                    <i 
                    
                    className="trash alternate outline icon" 
                    style={{color:"red",
                    marginTop:'10px'}} 
                    //this is function as prop sending prop from child to parent now sending to ContactList 
                    //because we create another function in ContactList that send parameter to its parent(app.js)
                    //we are creating here because it has access to the id in other only has object 
                    onClick={()=> props.clickHandler(id)}>

                    </i>


                </div>
            </div>
    )
}
export default ContactCard