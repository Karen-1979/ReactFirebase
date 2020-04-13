import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect,firestoreReducer } from "react-redux-firebase";


class Home extends Component {
  
  render() {
      
    const { client } = this.props;
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
                  <td>
                    <Link
                      to={`${item.id}`} 
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fa fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
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
const mapDispatchToProps = (dispatch) => {
  return {
   firestoreReducer: (id) => { dispatch(firestoreReducer(id))}
  }
 }
 const mapStateToProps = (state) => {
  console.log(state)
  return {
   client: state.firestore.ordered.client
  }
 }



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
   { collection: 'client'}
  ])
 )(Home)
