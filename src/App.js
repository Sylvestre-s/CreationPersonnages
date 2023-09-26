import React, { Component } from "react";
import CreateurPersonnage from "./containers/CreateurPersonnage/CreateurPersonnage";
import ListePeronnage from "./containers/ListePeronnage/ListePeronnage";

class App extends Component {
  state = {
    refresh: false,
  };

  handleRefresh = () => {
    this.setState((oldState) => {
      return {
        refresh: !oldState.refresh,
      };
    });
  };

  render() {
    return (
      <>
        <CreateurPersonnage refresh={this.handleRefresh} />
        <ListePeronnage refresh={this.state.refresh} />
      </>
    );
  }
}

export default App;
