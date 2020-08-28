import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import EditForm from '../EditForm/EditForm'

class EventEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      event: {
        title: '',
        description: '',
        date: ''
      },
      updated: null,
      user: props.user
    }
  }
  componentDidMount () {
    axios({
      url: `${apiUrl}/events/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
      .then(res => this.setState({ event: res.data.event }))
      .catch(console.error)
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
      url: `${apiUrl}/events/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { event: this.state.event },
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  handleDelete = () => {
    axios({
      url: `${apiUrl}/events/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }
  render () {
    const { event, updated } = this.state
    const { handleChange, handleSubmit, handleDelete } = this
    if (updated) {
      return <Redirect to='/my-events' />
    }
    return (
      <EditForm
        event={event}
        handleDelete={handleDelete}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/events/${this.props.match.params.id}`}
      />
    )
  }
}
export default EventEdit
