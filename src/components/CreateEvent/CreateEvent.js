import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import EventForm from '../EventForm/FormEvent'

import apiUrl from '../../apiConfig'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

class EventCreate extends Component {
  constructor (props) {
    super(props)
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

    const { msgAlert } = this.props

    axios({
      url: `${apiUrl}/events`,
      method: 'POST',

      data: { event: this.state.event },
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
      .then(res => this.setState({ createdId: res.data.event._id }))
      .then(() => msgAlert({
        heading: 'Event created!',
        message: messages.creatEventSuccess,
        variant: 'success'
      }))
      .catch(() => {
        msgAlert({
          heading: 'Event failed!',
          message: messages.creatEventFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { createdId } = this.state
    const { handleChange, handleSubmit } = this

    if (createdId) {
      return <Redirect to='/events' />
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
