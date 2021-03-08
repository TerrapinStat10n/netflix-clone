import React from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import './movielist.css';
import NfCarousel from './Swiper/NfCarousel';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    }
  }

    componentDidMount() {
      const token = localStorage.getItem("token");
      if (!token) {
        const { history } = this.props;
        history.push('/login');
      }
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
                      <NfCarousel />
                    </main>
                  </body>
            </div>
        )
    }
}

export default connect()(MovieList);