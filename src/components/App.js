import { useState ,useEffect} from 'react';
import React from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import Header from './Header';
function App() {

                  const LOCAL_STORAGE_KEY = "contacto";

                  const [ contacto, setContacto] = useState([]); 
                  
                  const addContactHandler = (contact) =>{
                        console.log(contact);
                        setContacto([...contacto, contact]);
                  };
                  useEffect(()=>{
                       const retrivedContacts=  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
                       if(retrivedContacts) setContacto(retrivedContacts);
                  },[])
                  //this is get data from local storage


                  useEffect(() => {
                        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacto))
                  }, [contacto]) //this to store data in local storage we can see this data console application
                  //localhost url our contacto data with js object this is to set data in localstorage
                  return (
                        
                              <div className="ui container">
                                    <Header/>
                                    <AddContact addContactHandler={addContactHandler}/>
                                    <ContactList contacts={contacto} /> 
                              </div>
                        );
                  
                  }

export default App ;
 