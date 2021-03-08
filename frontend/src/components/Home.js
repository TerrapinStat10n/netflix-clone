import React from "react";
import { connect } from "react-redux";
import { firstEmail } from "../redux/actions";
import { Link } from "react-router-dom";
import "../App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleEmail = () => {
    this.props.firstEmail(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="signup-screen">
        <header className="header">
          <img className="logo" src="logo.png" alt="logo" />
          <button className="signin">
            <Link to={"/login"}>Sign In</Link>
          </button>
        </header>
        <div>
          <h1>Unlimited movies, TV</h1>
          <h2>shows, and more.</h2>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
        </div>
        <div className="input-container">
          <input
            className="email-input"
            type="text"
            placeholder="Email address"
            onChange={(e) => this.updateInput(e.target.value)}
            value={this.state.input}
          />
          <Link to={"/signup"}>
            <button className="getstarted" onClick={this.handleEmail}>
              GET STARTED &gt;
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapEmailToProps(state) {
  const { users } = state;

  return { users };
}

export default connect(mapEmailToProps, { firstEmail })(Home);
