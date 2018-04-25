import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../actions/userActions';

export class UserSignInForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signInUser(user);
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="col-md-4 control-label">Email</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="col-md-4 control-label">Password</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Sign In</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signInUser })(UserSignInForm);