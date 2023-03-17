import React from "react"
import DataTime from "./DataTime";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {this.props.title} <DataTime />
      </header>
    )
  }
  
};

export default Header;