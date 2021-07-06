
import { React, Component } from 'react';
class AddContact extends Component{
    state={
        name:'',
        email:'',
    };
    add= (e)=>{
        e.preventDefault();
        if(this.state.name === '' && this.state.email === ''){
            alert("All the fields are mandatory");
            return;
        }
        else{
            this.props.addContactHandler(this.state);
            this.setState({name:'',email:''});
            console.log(this.state);
        }
    }
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        value={this.state.name}
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