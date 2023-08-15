/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    appointmentsList: [],
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachContact => {
        if (id === eachContact.id) {
          //   eachContact.isFavorite = !eachContact.isFavorite
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
      date1: new Date(),
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {title, date, appointmentsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Add Appointments</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
            alt="appointments"
          />
          <form
            className="contact-form-container"
            onSubmit={this.onAddAppointment}
          >
            <p className="paragraph">TITLE</p>
            <input
              value={title}
              onChange={this.onChangeTitle}
              className="input"
              placeholder="Title"
            />
            <p className="paragraph">DATE</p>
            <input
              type="date"
              className="input"
              value={date}
              onChange={this.onChangeDate}
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div>
            <p className="paragraph">Appointments</p>
            <ul>
              {appointmentsList.map(eachContact => (
                <AppointmentItem
                  key={eachContact.id}
                  appointmentDetails={eachContact}
                  toggleIsFavorite={this.toggleIsFavorite}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
