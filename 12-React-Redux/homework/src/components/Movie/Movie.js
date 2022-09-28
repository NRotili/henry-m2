import React from 'react';
import { connect } from 'react-redux';
import { receiveMovie } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        // usando destructuring
        // const { match: { params: { id }}} = this.props;

        // manera convencional
        const movieId = this.props.match.params.id;
        this.props.receiveMovie(movieId);
    } 

    render() {
        if(this.props.loadingDetail) {
            return (
                <div className="movie-detail">
                    <h1>Loading...</h1>
                </div>
            );
        } else {
            return (
                <div className="movie-detail">
                    <h1>{this.props.movie.Title}</h1>
                    <h2>{this.props.movie.Year}</h2>
                    <p>{this.props.movie.Plot}</p>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail,
        loadingDetail: state.loadingDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receiveMovie: idMovie => dispatch(receiveMovie(idMovie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);