import { useState ,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react';
import AddContact from './AddContact';
import ContactList from './ContactList';
import  {uuid } from 'uuidv4';
import Header from './Header';
import ContactDetails from './Contactdetails';
import api from '../api/contacts'
import EditContact from './EditContact';
import { AirplanemodeActive } from '@material-ui/icons';
import { get } from 'react-hook-form';

function App() {

                  const LOCAL_STORAGE_KEY = "contacto"; // variable for local storage inbuilt function 
                  //it storage data even after refreshes

                  const [ contacto, setContacto] = useState([]);  // usestate hook for storing data in variables
                  const [searchTerm, setSearchTerm] = useState();
                  const [searchResults, setSearchResults] = useState([]);  
                 
                 // addcontactHandler function taking props from child() to parent(app.js)
                  const addContactHandler = async(contact) =>{
                        console.log(contact);

                        const request ={
                              id: uuid(),
                              ...contact,
                        };
                        const response = await api.post("/contacts",request);
                        setContacto([...contacto, response.data]);
                  }; 

                  const updateContactHandler = async(contact) =>{
                        const response = await api.put(`/contacts/${contact.id}`, contact);
                        const {id, name, email} = response.data;
                        console.log(response.data);
                        setContacto(
                              contacto.map((contact)=>{
                                    return contact.id === id ? {...response.data} : contact;
                              })
                        );
                  };

                  // remove the list item function taking props from child() to parent component(app.js)  
                  const removeContactHandler = async(id) =>{
                        await api.delete(`/contacts/${id}`);
                        const newContactList = contacto.filter((contact)=>{
                              return contact.id !== id; 
                        });//filtering all the items with uuid and taking matched items storing in newContactList returning
                        setContacto(newContactList); //setting the contacto state variable updated 
                  }

                  const retrieveContacts = async()=>{
                        const response = await api.get("/contacts");
                        return response.data;
                  }

                  const searchHandler = (searchTerm)=>{
                        setSearchTerm(searchTerm);
                        if(searchTerm !== ''){
                              const newContactList = contacto.filter((contact)=>{
                                    Object.values(contact)
                                    .join(" ")
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase());
                        });
                              setSearchResults(newContactList);
                        }

                              else{
                                    setSearchResults(contacto);
                              }
                                          }
                  //useEffect runs on each render but it has dependency of empty bracket so it will for once 
                  useEffect(()=>{
                        // we are now retriving the data stored in localstorage inbuilt and parsing it 
                  //      const retrivedContacts=  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
                  //      //if retrivedcontacts there then update the setContacto state
                  //      if(retrivedContacts) setContacto(retrivedContacts);
                        const getAllContacts = async () =>{
                              const allContacts = await retrieveContacts();
                              if(allContacts) setContacto(allContacts)
                        };
                        getAllContacts();
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
                                    <Router>
                                          <Header/>
                                          {/* AddContact taking function as prop addContactHandler */}
                                          <Switch>
                                          {/* <ContactList contacts={contacto} getContactId={removeContactHandler} /> */}
                                           <Route exact path="/" 
                                           render={(props)=>(
                                                <ContactList 
                                                {...props} 
                                                contacts={searchTerm < 1 ? contacto : searchResults} 
                                                getContactId={removeContactHandler}
                                                term={searchTerm}
                                                searchKeyword={searchHandler}
                                                />
                                           )}
                                          />
                                          <Route path="/contact/:id" component={ContactDetails}/>
                                          
                                           {/* <AddContact addContactHandler={addContactHandler}/>   */}
                                          <Route path="/add" 
                                          exact 
                                          render={(props)=>(
                                                <AddContact {...props} addContactHandler={addContactHandler}/>
                                           )}
                                          
                                          />

                                         
                                          {/* ContactList taking contacts and getContactId as props */}
                                          {/* getting getContactId from ContactList with id and sending it to the remove
                                          ContactHandler function with id  */}
                                           <Route path="/edit" 
                                          exact 
                                          render={(props)=>(
                                                <EditContact {...props} updateContactHandler={updateContactHandler}/>
                                           )}
                                          
                                          />
                                         
                                          </Switch>
                                    </Router> 
                              </div>
                       );
                                                                          
                                          }                

export default App ;
 