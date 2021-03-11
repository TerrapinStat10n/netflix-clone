import React, { Component } from "react";
import Swiper from "swiper/bundle";
import axios from "axios";
import { connect } from "react-redux";
import "swiper/swiper-bundle.css";
import "./nfcarousel.css";
import { get_movies } from "../../redux/actions";
import { Link } from 'react-router-dom';

class NfCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.token,
      numSlides: 5
    };
  }

  componentWillMount() {
    this.getMovies();
    let os;
    os = this.getOS();
    os === 'Android' ? this.setState({numSlides: 3}) : this.setState({numSlides: 5});
  }

  async getMovies() {
    await axios
      .get("https://netflix-clone-api-cb.herokuapp.com/api/NfMovies", {
        headers: {
          authorization: "Token " + this.state.token,
        },
      })
      .then((res) => {
        this.setState({ movies: res.data }, () => this.props.get_movies(res.data));
      })
      .then((rest) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }

  render() {
    let swiper1 = new Swiper(".swiper1", {
      slidesPerView: this.state.numSlides,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    let swiper2 = new Swiper(".swiper2", {
      slidesPerView: this.state.numSlides,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    let swiper3 = new Swiper(".swiper3", {
      slidesPerView: this.state.numSlides,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return (
      <div>
        <h1 className="h1-list">All</h1>
        <div className="swiper-container swiper2">
          <div className="swiper-wrapper">
          {this.state.movies && this.state.movies.map(movie => (
            <div className="swiper-slide">
              <Link to={`/moviedetails/${movie.id}`}>
                <img src={movie.link} alt={movie.title} />
              </Link>
            </div>
              )
            )
          }
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>        

        </div>

        <h2 className="h2-list">TV Shows</h2>
        <div className="swiper-container swiper2">
          <div className="swiper-wrapper">
          {this.state.movies && this.state.movies.filter(movie => movie.category_id === 1).map(movie => (
            <div className="swiper-slide">
              <Link to={`/moviedetails/${movie.id}`}>
                <img src={movie.link} alt={movie.title} />
              </Link>
            </div>
              )
            )
          }
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>        
  
        </div>

        <h3 className="h3-list">Movies</h3>
        <div className="swiper-container swiper2">
          <div className="swiper-wrapper">
          {this.state.movies && this.state.movies.filter(movie => movie.category_id === 2).map(movie => (
            <div className="swiper-slide">
              <Link to={`/moviedetails/${movie.id}`}>
                <img src={movie.link} alt={movie.title} />
              </Link>
            </div>
              )
            )
          }
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>        
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { movies, token } = state;

  return { movies, token };
}

export default connect(mapStateToProps, { get_movies })(NfCarousel);
