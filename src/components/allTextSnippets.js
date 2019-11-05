import React, { Component } from "react";
import { connect } from "react-redux";

import { removeText, editText } from "../actions/actions";

class AllTextSnippets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: this.props.texts,
      searchParam: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.texts && this.props.texts !== prevProps.texts) {
      this.setState({
        texts: this.props.texts
      });
    }
  }

  removeText = index => {
    this.props.removeText(index);
  };

  editText = (text, index) => {
    this.props.editText(text, index);
  };

  handleFilter = e => {
    this.setState({
      searchParam: e.target.value
    });
  };

  render() {
    const textsItems = this.state.texts
      .filter(item => item.content.includes(this.state.searchParam))
      .map((text, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between"
        >
          <span>{index + 1})</span>
          <span>{text.content}</span>
          <span>{text.lastUpdated}</span>
          <button onClick={() => this.editText(text.content, index)}>
            Edit
          </button>
          <button onClick={() => this.removeText(index)}>Delete</button>
        </li>
      ));

    return (
      <div className="col-xl-12 mt-5">
        <div className="d-flex justify-content-between mb-5">
          <h3>Your snips!</h3>
          <input
            type="text"
            className="p-2"
            placeholder="search"
            onChange={this.handleFilter}
          />
        </div>

        <div className="d-flex flex-column">
          <ul className="list-group">{textsItems}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    texts: state.texts
  };
};

const mapDispatchToProprs = {
  removeText: removeText,
  editText: editText
};

export default connect(
  mapStateToProps,
  mapDispatchToProprs
)(AllTextSnippets);
