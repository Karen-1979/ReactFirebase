import React, { Component } from 'react'
import { firestoreConnect} from "react-redux-firebase";

 class Exemple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email:'',
      balance:''
    };

   
  }

  onChange=(event)=> {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit=(event)=> {
    event.preventDefault();
    const user = this.state;
    const {firestore}=this.props;
    firestore.add(
      { collection: 'client'},user
    )

    }
  render() {
    return (
      <div className="contener">
       <form onSubmit={this.handleSubmit}>
  <label>
    firstName:<br/>
    <input type="text" name="firstName" onChange={this.onChange}  value={this.state.firstName}/>
  </label><br/>
  <label>
    lastName:<br/>
    <input type="text" name="lastName" onChange={this.onChange} value={this.state.lastName}/>
  </label><br/>
  <label>
    email:<br/>
    <input type="email" name="email" onChange={this.onChange} value={this.state.email}/>
  </label><br/>
  <label>
    balance:<br/>
    <input type="number" name="balance"  onChange={this.onChange} value={this.state.balance}/>
  </label><br/>
  <input type = "submit" value= "submit" className="submit"/>
</form>
        
      </div>
    )
  }
}
export default firestoreConnect()(Exemple)
