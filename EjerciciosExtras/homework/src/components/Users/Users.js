import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

export class Users extends Component {

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(user => {
              return (<tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Link to={`/users/${user.id}/posts`} className="button">Posts</Link>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

