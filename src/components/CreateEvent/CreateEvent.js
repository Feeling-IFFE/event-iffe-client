import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import EventForm from '../EventForm/FormEvent'

import apiUrl from '../../apiConfig'
import axios from 'axios'
// import messages from '../AutoDismissAlert/messages'

class EventCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      events: {
        title: '',
        description: '',
        date: ''
      },
      createdId: null
    }
  }

  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedEvents = Object.assign({}, prevState.events, updatedField)
      return { events: editedEvents }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/events`,
      method: 'POST',
      data: { event: this.state.event }
    })
      .then(res => this.setState({ createdId: res.data.event._id }))
      .catch(console.error)
  }

  // onCreateEvent = event => {
  //   event.preventDefault()
  //
  //   const { msgAlert, history, user } = this.props
  //
  //   createEvent(this.state, user)
  //     .then(() => msgAlert({
  //       heading: 'Change Password Success',
  //       message: messages.createEventSuccess,
  //       variant: 'success'
  //     }))
  //     .then(() => history.push('/'))
  //     .catch(error => {
  //       this.setState({ oldPassword: '', newPassword: '' })
  //       msgAlert({
  //         heading: 'Create event Failed with error: ' + error.message,
  //         message: messages.createEventFailure,
  //         variant: 'danger'
  //       })
  //     })
  // }

  render () {
    const { events, createdId } = this.state
    const { handleChange, handleSubmit } = this
    console.log(events.title)

    if (createdId) {
      return <Redirect to={`/events/${createdId}`} />
    }

    return (
      <EventForm
        events={events}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/'
      />
    )
  }
}

export default EventCreate
