import { useState ,useEffect} from 'react';
import React from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import  {uuid } from 'uuidv4';
import Header from './Header';
function App() {

                  const LOCAL_STORAGE_KEY = "contacto"; // variable for local storage inbuilt function 
                  //it storage data even after refreshes

                  const [ contacto, setContacto] = useState([]);  // usestate hook for storing data in variables
                  
                 
                 // addcontactHandler function taking props from child() to parent(app.js)
                  const addContactHandler = (contact) =>{
                        console.log(contact);
                        setContacto([...contacto, {id: uuid(),...contact} ]);
                  }; 

                  // remove the list item function taking props from child() to parent component(app.js)  
                  const removeContactHandler = (id) =>{
                        const newContactList = contacto.filter((contact)=>{
                              return contact.id !== id; 
                        });//filtering all the items with uuid and taking matched items storing in newContactList returning
                        setContacto(newContactList); //setting the contacto state variable updated 
                  }

                  //useEffect runs on each render but it has dependency of empty bracket so it will for once 
                  useEffect(()=>{
                        // we are now retriving the data stored in localstorage inbuilt and parsing it 
                       const retrivedContacts=  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
                       //if retrivedcontacts there then update the setContacto state
                       if(retrivedContacts) setContacto(retrivedContacts);
                  },[])  
                  //this is get data from local storage

                  //it sets the localstorage inbuilt with the data which we have given in state variable and making it stringify
                  useEffect(() => {
                        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacto))
                  }, [contacto]) 
                  //this to store data in local storage we can see this data console application
                  //localhost url our contacto data with js object this is to set data in localstorage
                  return (
                        
                              <div className="ui container">
                                    <Header/>
                                    {/* AddContact taking function as prop addContactHandler */}
                                    <AddContact addContactHandler={addContactHandler}/>  
                                    {/* ContactList taking contacts and getContactId as props */}
                                    {/* getting getContactId from ContactList with id and sending it to the remove
                                    ContactHandler function with id  */}
                                    <ContactList contacts={contacto} getContactId={removeContactHandler} /> 
                              </div>
                        );
                  
                  }

export default App ;
 