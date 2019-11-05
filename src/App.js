import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import PasteComponent from "./components/pasteComponent";
import AllTextSnippets from "./components/allTextSnippets";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const Bounce = styled.div`
  animation: 3s ${keyframes`${bounce}`} infinite;
`;
class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "#e0e0d1" }}>
        <header>
          <nav
            className="navbar navbar-dark bg-dark"
            style={{ justifyContent: "center" }}
          >
            <a className="navbar-brand" href="#"></a>
          </nav>
        </header>
        <main role="main" className="container">
          <div className="col-xl-12">
            <Bounce>
              <h1
                style={{
                  marginTop: 40
                }}
              >
                PASTE IT!
              </h1>
            </Bounce>
            <PasteComponent editText={this.props.editText} />

            <AllTextSnippets />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editText: state.editText
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
