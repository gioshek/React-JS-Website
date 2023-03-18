import React from "react"
import Moment from "react-moment"

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          {this.props.title} 
          <div className="dataTime">Сейчас: <Moment format="YYYY-MM-DD HH:mm:ss" interval={1000} /></div>
        </header>
      </div>
    )
  }
  
};

export default Header;