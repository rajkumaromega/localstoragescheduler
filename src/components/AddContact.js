
import { React, Component } from 'react';
class AddContact extends Component{
    //this is  state object with empty  variables
    state={
        name:'',
        email:'',
    };

    //taking e as an event and preventing for not being refreshed 
    add= (e)=>{
        e.preventDefault();
        //if two variable empty returns alert with that message
        if(this.state.name === '' && this.state.email === ''){
            alert("All the fields are mandatory");
            return;
        }
        else{
            //if not empty those two variables(name, email) taking this addContactHandler from app.js through props and 
            //sending back to the app component with the state variable  data
            this.props.addContactHandler(this.state);
            // After sending back the state to the app.js we dont want those data to be stored in our input fields
            //so make it empty
            this.setState({name:'',email:''});
            //consoling to chrome
             console.log(this.state);
        }
    }
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                {/* add onSubmit start when click the submit button and takes to the add function */}
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        // taking state object variable as a value
                        value={this.state.name}
                        // when any changes made on the input field setState object name to the changed input value 
                        //same for other input fields
                        onChange={(e)=> this.setState({name: e.target.value})}
                        placeholder="name"/>
                    </div>
                     <div className="field">
                        <label>Email</label>
                        <input 
                        type="email" 
                        name="Email" 
                        value={this.state.email}
                        onChange={(e)=> this.setState({email: e.target.value})}
                        placeholder="email"/>
                    </div>
                    <button className="ui button blue">button</button>
                </form>
            </div>
        )}
}
export default AddContact;