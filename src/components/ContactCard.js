import React from 'react';
import user from '../images/user.png';
import { Link } from 'react-router-dom';
const ContactCard =(props)=>{
    //we accessed to the props values from contactList 
    const {id,name,email} = props.sendContact;
     
    return (
       
        <div className="item">

            {/* design for list of contacts below form  */}
            <img className="ui avatar image" src={user} alt= "user"/>
                <div className="content">
                    
                    <Link to= {{pathname:`/contact/${id}`, state:{contact: props.sendContact}}}>
                    <div className="header">
                        {name}
                    </div>
                    <div className="header">
                        {email}
                    </div>
                    </Link>



                    {/* deleting icon  */}
                    <i 
                    
                    className="trash alternate outline icon" 
                    style={{color:"red",
                    marginTop:'10px',
                    marginLeft:'10px'}}
                    onClick={()=> props.clickHandler(id)}></i>
                     
                    {/* //this is function as prop sending prop from child to parent now sending to ContactList 
                    //because we create another function in ContactList that send parameter to its parent(app.js)
                    //we are creating here because it has access to the id in other only has object  */}                   
                     
                     <Link to={{ pathname: `/edit`, state:{ contact: props.sendContact}}}>
                     <i 
                    className="edit alternate outline icon" 
                    style={{color:"blue",
                    marginTop:'7px',
                    
                     }} 
                     //onClick={()=> props.clickHandler(id)}
                     ></i></Link>
                    {/* //this is function as prop sending prop from child to parent now sending to ContactList 
                    //because we create another function in ContactList that send parameter to its parent(app.js)
                    //we are creating here because it has access to the id in other only has object  */}
                    

                    


                </div>
            </div>
    )
}
export default ContactCard;