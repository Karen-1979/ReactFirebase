import React, { Component } from "react";
import { firestoreConnect} from "react-redux-firebase";


 class SignIn extends Component {
state = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  Repassword: "",
  passwordError: "",
  firstNameError: "",
  lastNameError: "",
  emailError: ""
}

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password !== this.state.Repassword) {
      return this.setState({
        passwordError: (this.state.passwordError =
          "invalid : password ! Repassword")
      });
    } else if (this.state.email === "") {
      return this.setState({
        emailError: (this.state.emailError = "write your email")
      });
    } else if (this.state.firstName === "") {
      return this.setState({
        firstNameError: (this.state.firsNameError = "write your firstname")
      });
    } else if (this.state.lastName === "") {
      return this.setState({
        lastNameError: (this.state.lastNameError = "write your lastname")
      });
    } const user = this.state;
    const { firestore } = this.props;
    firestore.add({ collection: "client" }, user);
    console.log(this.state);
  };

  render() {
    return (
      <div className="contener">
        <form onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          <label htmlFor="email">email</label>
          <br />
          <input
            type="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <span className="ivalid">{this.state.emailError}</span>
          <br />
          <label htmlFor="password">password</label>
          <br />
          <input
            type="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <br />
          <label htmlFor="REpassword">Repassword</label>
          <br />
          <input
            type="password"
            id="Repassword"
            onChange={this.handleChange}
            value={this.state.Repassword}
          />
          <br />
          <span className="ivalid">{this.state.passwordError}</span>
          <br />
          <label htmlFor="firstName">firstName</label>
          <br />
          <input
            type="text"
            id="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <br />
          <span className="ivalid">{this.state.firstNameError}</span>
          <br />
          <label htmlFor="lastName">lastName</label>
          <br />
          <input
            type="text"
            id="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <br />
          <span className="ivalid">{this.state.lastNameError}</span>
          <br />
          <br/>
          <button>Sign Up</button>
          <br />
        </form>
      </div>
    );
  }
}

export default firestoreConnect()(SignIn);
