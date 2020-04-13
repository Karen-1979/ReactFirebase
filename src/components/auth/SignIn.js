import React, { Component } from 'react'
import "firebase/auth";
import  firebase, { app } from 'firebase';



 class SignIn extends Component {
  state={
    email:'',
    password:''
  }
  handleChange=(event)=>{
    this.setState({[event.target.id]:event.target.value})
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    const user = this.state;
    console.log(this.props)
    // firebase =this.props;
    console.log(firebase)
    console.log(user)
   firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then((response) => {
      console.log(response);
     app.history.push('/client');
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage,errorCode)
      // ...
    });
  }
  render() {
    console.log(this.props)
    return (
      <div className= "contener">
        <form onSubmit={this.handleSubmit}>
          <h2>Sign In</h2>
           <label htmlFor="email">email</label><br/>
           <input type="email" id = "email" onChange={this.handleChange} value= {this.state.email}/><br/>
           <label htmlFor = "password">password</label><br/>
           <input type="password" id = "password" onChange={this.handleChange} value= {this.state.password}/><br/><br/>
           <button>Login</button>
        </form>
        
      </div>
    )
  }
}

export default  SignIn
