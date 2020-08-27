import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import EventForm from '../EventForm/FormEvent'

class EventEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      events: {
        title: '',
        description: '',
        date: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/events/${this.props.match.params.id}`)
      .then(res => this.setState({ events: res.data.events }))
      .catch(console.error)
  }

  handleChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedevents = Object.assign({}, prevState.events, updatedField)
      return { events: editedevents }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/events/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { events: this.state.events }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { events, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/events/${this.props.match.params.id}`} />
    }

    return (
      <EventForm
        events={events}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/events/${this.props.match.params.id}`}
      />
    )
  }
}

export default EventEdit
