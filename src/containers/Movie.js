import React,{Component} from "react";
import {connect} from "react-redux";
import Spinner from "../components/Spinner";
import {fetchMovie, setLoading} from "../actions/searchActions";
import {Link} from "react-router-dom";
import {URL_IMAGE} from "../utils/ApiKey";

export class Movie extends Component{

    componentDidMount() {
        this.props.fetchMovie(this. props.match.params.id);
        this.props.setLoading();
    }

    render() {
        const { loading, movie } = this.props;
        const IMG_PATH = `${URL_IMAGE}`.concat(movie.poster_path)


        let movieInfo = (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img src={IMG_PATH} className="thumbnail" alt="Poster" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">{movie.original_title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Number of Votes:</strong> {movie.vote_count}
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong> {movie.release_date}
                            </li>
                            <li className="list-group-item">
                                <strong>Vote Average:</strong> {movie.vote_average}
                            </li>
                            <li className="list-group-item">
                                <strong>Tag Line :</strong> {movie.tagline}
                            </li>
                            <li className="list-group-item">
                                <strong>Status:</strong> {movie.status}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>About </h3>
                            {movie.overview}
                            <hr />

                            <Link to="/" className="btn btn-default text-light">
                                Go Back To Search
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );

        let content = loading ? <Spinner /> : movieInfo;
        return <div>{content}</div>;
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
});

export default connect(
    mapStateToProps,
    { fetchMovie, setLoading }
)(Movie);