import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addText, updateText } from "../actions/actions";

class PasteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSnippet: this.props.editText.content
        ? this.props.editText.content
        : "",
      editMode: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidUpdate(prevProps) {
    if (this.props.editText && this.props.editText !== prevProps.editText) {
      this.setState({
        textSnippet: this.props.editText.content,
        editMode: true
      });
    }
  }

  handleSave = e => {
    e.preventDefault();

    let { textSnippet } = this.state;
    this.props.addText(textSnippet);
    this.setState({ textSnippet: "" });
  };

  handleUpdate = e => {
    e.preventDefault();
    let { textSnippet } = this.state;
    let { id } = this.props.editText;
    this.props.updateText(textSnippet, id);
    this.setState({ textSnippet: "", editMode: false });
  };

  render() {
    return (
      <div
        className="child"
        style={{
          display: "flex",
          width: "550px",
          margin: "auto",
          flexDirection: "column"
        }}
      >
        <textarea
          style={{ height: 200, marginTop: 30 }}
          name="textSnippet"
          value={this.state.textSnippet}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <div className="text-right">
          <button
            style={{
              border: "none",
              color: "white",
              backgroundColor: "#008cba",
              padding: "15px 32px",
              fontsize: "16px",
              margin: "4px 2px",
              cursor: "pointer"
            }}
            onClick={this.state.editMode ? this.handleUpdate : this.handleSave}
          >
            {this.state.editMode ? "UPDATE!" : "UPLOAD!"}
          </button>
        </div>
      </div>
    );
  }
}
PasteComponent.propTypes = {
  addText: PropTypes.func.isRequired,
  text: PropTypes.string,
  editText: PropTypes.object
};

export default connect(
  null,
  {
    addText: addText,
    updateText: updateText
  }
)(PasteComponent);
