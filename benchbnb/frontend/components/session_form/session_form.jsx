import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field){
    return e => this.setState({ [field]: e.target.value } )
  }

  render() {

    let otherLink;
    if (this.props.formType === "signup") {
      otherLink = "login"
    } else if (this.props.formType === "login") {
      otherLink = "signup"
    }
    
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Username:
            <input onChange={this.update("username")} type="text" value={this.state.username} />
          </label>
          <br></br>
          <label> Password:
            <input onChange={this.update("password")} type="password" value={this.state.password} />
          </label>
          <br></br>
          <input type="submit" value={this.props.formType} />
        </form>
        <br></br>
        <Link to={`/${otherLink}`}>Or would you rather {otherLink}?</Link>
      </div>
    )
  }
}

export default SessionForm;
