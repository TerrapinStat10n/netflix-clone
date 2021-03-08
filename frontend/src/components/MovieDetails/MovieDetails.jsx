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
      currentMovie: params.id,
      movies: this.props.movies
    };
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

        console.log(this.state.movies[this.state.currentMovie - 1].name);
        return (
            <div style={{ height: '100%' }}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                  <body>
                    <main style={{marginTop: '90px'}}>
                      <div>
                        <div className="film-img-div">
                          <img className="film-img" src={this.state.movies[this.state.currentMovie - 1].link} alt="Test"/>
                          <div className="film-title">{this.state.movies[this.state.currentMovie - 1].name}</div>
                          <button className="play-button">PLAY</button>
                        </div>
                        <div className="film-desc">
                          {this.state.movies[this.state.currentMovie - 1].description}
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