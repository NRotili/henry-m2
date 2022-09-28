import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllUserPosts } from '../../actions';
// import CommentsPost from '../CommentsPost/CommentsPost';
import './UserPosts.css';

export class UserPosts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
    console.log(this.state.loading);
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.getAllUserPosts(userId)
      .then(c => {
        console.log(`1 - this.state.loading: ${this.state.loading}`);
        setTimeout(() => this.setState({ loading: false }), 1000)
        console.log(`2 - this.state.loading: ${this.state.loading}`);
      }
      );
  }

  render() {
    const userId = this.props.match.params.id;
    console.log(this.state.loading);

    if (this.state.loading) {
      return (
        <div className="details">
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div className="details">
          <h4 className="title">Posts del usuario {userId}</h4>
          <ul>
            {
              this.props.userPosts.map(post => {
                return (<li>
                  <h1>({post.id}) {post.title}</h1>
                  <p>{post.body}</p>
                  <NavLink to={`/user/${userId}/post/${post.id}/coments`}>COMENTARIOS</NavLink>
                  {/* <CommentsPost id={post.id}></CommentsPost> */}
                </li>)
              })
            }
          </ul>
        </div>
      );
    }
  }
}

export const mapStateToProps = (state) => {
  return {
    userPosts: state.userPosts
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllUserPosts: id => dispatch(getAllUserPosts(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);