import React, { Component } from 'react'
import {compose } from 'redux';
import {connect } from 'react-redux';
import { firestoreConnect,firestoreReducer } from "react-redux-firebase"
import 'firebase/auth';


 class SomeComponent extends Component {
  // logout =(e)=>{
  //   e.preventDefault();
  //   const {firestore}= this.props;
   
  //   firestore.doc()
  //     }
  
  render() {
    //const {location} = this.props
      console.log(firestore.data.client)
    const  {client}  = this.props;
    console.log(client)
    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {""}
                <i className="fa fa-users" /> client {" "}
              </h2>
            </div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {client.map(item => (
                <tr key={item.id}>
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                  <td>{item.email}</td>
                  <td>${parseFloat(item.balance).toFixed(2)}</td>
                  
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>loading...</h1>;
    }
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
   client: state.firestore.ordered.client
  }
 }



export default compose(
  connect(mapStateToProps),
  firestoreConnect([
   { collection: 'client'}
  ])
 )(SomeComponent)

// export default function ({ todoId }) {
//   firestoreConnect(() => [
//     { collection: 'client', doc: todoId } // or `todos/${props.todoId}`
//   ])
//   const todos = firestoreReducer(({ firestore: { ordered } }) => ordered.client && ordered.client[todoId])
//  }
  