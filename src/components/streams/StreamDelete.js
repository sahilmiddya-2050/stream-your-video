import React, { useEffect } from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions/index";
import { Link } from "react-router-dom";

const StreamDelete = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const onDeleteStream = () => {
    if (props.stream !== undefined) {
      if (props.currentUserId === props.stream.userId) {
        props.deleteStream(props.match.params.id);
      } else {
        history.push("/");
      }
    } else {
      history.push("/");
    }
  };

  const actions = (
    <React.Fragment>
      <button onClick={onDeleteStream} className="ui button negative">
        Delete
      </button>
      <Link to="/" onClick={() => history.push("/")} className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      <Modal
        onClick={() => history.push("/")}
        header="Delete Stream"
        content={`Are you sure you want to delete ${
          props.stream !== undefined
            ? "the stream " + props.stream.title
            : "this stream"
        } ?`}
        actions={actions}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
