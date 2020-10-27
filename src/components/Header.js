import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import GoogleAuth from "./GoogleAuth";
import Auth from "./Auth";

const Header = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        StreamerYN
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        {props.isSignedIn && (
          <Link to="/streams/new" className="item">
            Create Stream
          </Link>
        )}
        {/* <GoogleAuth /> */}
        {window.gapi && <Auth />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
