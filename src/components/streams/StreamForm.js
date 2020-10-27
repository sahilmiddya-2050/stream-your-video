import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className={`field ${meta.touched && meta.error && "error"}`}>
        <label>{label}</label>
        <input type="text" {...input} />
        {meta.touched && (
          <div>
            <div style={{ color: "brown" }}>{meta.error}</div>
          </div>
        )}
      </div>
    );
  }

  onSubmit = (formValues) => this.props.onSubmit(formValues);
  //   onSubmit = (formValues) => {
  //     this.props.createStream(formValues, this.props.userId);
  //   };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Stream title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Stream description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must have enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must have enter a description";
  }

  return errors;
};

export default reduxForm({ form: "StreamForm", validate: validate })(
  StreamForm
);
