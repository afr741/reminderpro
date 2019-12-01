import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import moment from 'moment';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate);
    console.log('this state due date is ', this.state.dueDate);
  }
  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className='list-group col-sm-4'>
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className='list-group-item'>
              <div className='list-item'>
                <div>{reminder.text}</div>
                <div>
                  <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                </div>
              </div>
              <div
                className='list-item delete-button'
                onClick={() => this.deleteReminder(reminder.id)}
              >
                &#x2715;
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
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
            <input
              className='form-control'
              type='datetime-local'
              placeholder='month/day/year, 00:00 AM'
              onChange={event => this.setState({ dueDate: event.target.value })}
            />
          </div>
        </div>
        <Button
          type='button'
          className='bt btn-success'
          onClick={() => this.addReminder()}
        >
          Add Reminder
        </Button>
        {this.renderReminders()}
        <div>
          <Button
            type='button'
            className='bt btn-danger'
            onClick={() => this.props.clearReminders()}
          >
            Clear Reminders
          </Button>
        </div>
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

export default connect(mapStateToProps, {
  addReminder,
  deleteReminder,
  clearReminders
})(App);
