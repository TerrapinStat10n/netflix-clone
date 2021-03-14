import React from 'react';
import { connect } from 'react-redux';
import Toolbar from '../Toolbar';
import SideDrawer from '../SideDrawer';
import Backdrop from '../Backdrop';
import './moviedetails.css';


class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params } } = this.props
    this.state = {
      sideDrawerOpen: false,
      currentMovieId: params.id,
      movies: this.props.movies,
      currentMovie: {}
    };
  }

    componentWillMount() {
      this.setState({currentMovie: this.state.movies.find(movie => movie.id === parseInt(this.state.currentMovieId)
        )})
    }
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
      }
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
      }
    
    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
          }

        return (
            <div style={{ height: '100%' }}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                  <body>
                    <main style={{marginTop: '90px'}}>
                      <div>
                        <div className="film-img-div">
                          <img className="film-img" src={this.state.currentMovie.link} alt="Test"/>
                          <div className="film-title">{this.state.currentMovie.name}</div>
                          <button className="play-button">PLAY</button>
                        </div>
                        <div className="film-desc">
                          {this.state.currentMovie.description}
                        </div>
                      </div>
                    </main>
                  </body>
            </div>
        )
    }
}

function mapStateToProps(state) {

  return {movies: state.movies}
}
export default connect(mapStateToProps, null)(MovieDetails);