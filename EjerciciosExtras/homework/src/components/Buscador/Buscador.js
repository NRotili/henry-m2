import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions";
import './Buscador.css';

export class Buscador extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filtrados: [],
      postsSearch: ""
    }
    // this.onButtonClick = this.onButtonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.getAllPosts().then(c => {
      console.log(`c: ${c}`);
      this.setState({
        filtrados: this.props.posts
      });
      console.log(`this.state.filtrados: ${this.state.filtrados}`);
    })

  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      filtrados: this.props.posts.filter(p => p.title.includes(this.state.postsSearch))
    })
    this.setState({
      postsSearch: ""
    })
  }

  handleInput(event) {
    this.setState({
      postsSearch: event.target.value
    });
  }

  viewAllPost() {
    this.setState({
      filtrados: this.props.posts
    })
  }

  render() {
    const { postsSearch } = this.state;
    return (
      <div className="details">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="user">Posts: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={postsSearch}
              onChange={this.handleInput}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>

        <button className="btn2" onClick={() => this.viewAllPost()}>VER TODOS</button>
        <div className="details">
          <h4 className="title">Posts </h4>
          {
            this.state.filtrados.map(post => {
              return (<div className="card">
                <h4>({post.id}) {post.title}</h4>
                <p>{post.body}</p>
              </div>)
            })
          }
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(getAllPosts())
  };
}

export const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador)
