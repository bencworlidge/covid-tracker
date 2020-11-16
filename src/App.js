import React from "react";
import { Cards, CountryPicker, Chart } from "./components";
import "./App.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    return (
      <div className="container">
        <Cards data={this.state.data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
