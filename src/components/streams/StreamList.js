import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions/index";
import "./StreamList.css";

const StreamList = (props) => {
  const { streams } = props;
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    return (
      <div className="right floated content">
        <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
          Edit
        </Link>
        <Link
          to={`/streams/delete/${stream.id}`}
          className="ui button negative"
        >
          Delete
        </Link>
      </div>
    );
  };

  const renderCreateStreamButton = () => {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/streams/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    );
  };

  const renderList = () => {
    return streams.map((stream) => (
      <div className="item stream" key={stream.id}>
        {stream?.userId === props.currentUserId && renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={`/streams/${stream.id}`} className="header">
            {stream.title}
          </Link>
          <div>{stream.description}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="">
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {props.isSignedIn && renderCreateStreamButton()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
