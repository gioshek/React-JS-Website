import React from "react"
// import AddUser from "./AddUser"
import { IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5"
import Refactor from "./Refactor"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user;
    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icon"/>
                <h3>{this.user.firstname} {this.user.lastname}, {this.user.age}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? "Счастлив :)" : "Не особо :("}</b>

                {this.state.editForm && <Refactor user={this.user} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
  
};

export default User;