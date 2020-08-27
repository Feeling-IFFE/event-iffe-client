import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import EventForm from '../EventForm/FormEvent'

import apiUrl from '../../apiConfig'
import axios from 'axios'
// import messages from '../AutoDismissAlert/messages'

class EventCreate extends Component {
  constructor (props) {
    super(props)
    console.log(this.prop.user)
    this.state = {
      event: {
        title: '',
        description: '',
        date: ''
      },
      createdId: null,
      user: props.user
    }
  }

  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedEvents = Object.assign({}, prevState.event, updatedField)
      return { event: editedEvents }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/events`,
      method: 'POST',

      data: { event: this.state.event },
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
      .then(res => this.setState({ createdId: res.data.event._id }))
      .catch(console.error)
  }

  // onCreateEvent = event => {
  //   event.preventDefault()

  //   const { msgAlert, history, user } = this.props

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
    const { createdId } = this.state
    const { handleChange, handleSubmit } = this

    if (createdId) {
      return <Redirect to={`/events/${createdId}`} />
    }

    return (
      <EventForm
        event={event}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/'
      />
    )
  }
}

export default EventCreate
