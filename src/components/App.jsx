import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text);
    console.log('action text is ', this.text);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className='list-group col-sm-4'>
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className='list-group-item'>
              <div>{reminder.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    console.log('this.props', this.props);
    return (
      <div className='App'>
        <div className='title'>Reminder Pro</div>
        <div className='form-inline'>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='I have to...'
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
        </div>
        <button
          type='button'
          className='bt btn-success'
          onClick={() => this.addReminder()}
        >
          Add Reminder
        </button>
        {this.renderReminders()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('Map state to Props state', state);
  return {
    reminders: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReminder }, dispatch);
}
export default connect(mapStateToProps, { addReminder })(App);
