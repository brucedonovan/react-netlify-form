import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  formName: PropTypes.string.isRequired,
  successFunction: PropTypes.func.isRequired,
  errorFunction: PropTypes.func,
  formFields: PropTypes.object.isRequired
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class NetlifyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.formFields;
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": props.formName, ...this.state })
    })
      .then(res => {
        res.ok
          ? props.successFunction(res)
          : props.errorFunction
          ? props.errorFunction(res)
          : null;
      })
      .catch(err => (props.errorFunction ? props.errorFunction(res) : null));
  };

  render() {
    return (
      <form onSubmit={e => handleSubmit(e)} form-name={props.formName}>
        <input type="hidden" name="form-name" value={props.formName} />
        {this.props.children}
      </form>
    );
  }
}

NetlifyForm.propTypes = propTypes;

export default NetlifyForm;
