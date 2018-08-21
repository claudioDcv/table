import React, { Component } from "react";
import { compareMake } from "./TableUtils";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      sortBy: "value"
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(key) {
    this.setState({ sortBy: key });
  }

  render() {
    const { data, sortBy } = this.state;
    return (
      <div>
        <button onClick={() => this.onSort("id")}>id</button>
        <button onClick={() => this.onSort("value")}>name</button>
        <button onClick={() => this.onSort("country")}>country</button>
        {JSON.stringify(data.sort(compareMake(sortBy)))}
        {data.map(e => <strong>{e.id}</strong>)}
      </div>
    );
  }
}

export default Table;
