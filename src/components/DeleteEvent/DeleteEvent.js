import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class DeleteEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      event: null,
      deleted: false,
      user: props.user
    }
  }
  componentDidMount () {
    axios(`${apiUrl}/events ${this.props.match.params.id}`)

    .then(res => this.setState({ event: res.data.event }))
    .catch(console.error)
  }
  deleteEvent = () => {
    axios({
      url: `${apiUrl}/events`,
      method: 'DELETE',
      data: { event: this.state.event },
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      }
    })
    .then(() => this.setState({ deleted: true }))
    .catch(console.error)
  }
  render () {
    const { events, deleted } = this.setState

    if (!events) {
      return <Redirect to={{
        pathname: '/events',
        state: { message: 'Event deleted successfully!' }
      }} />
    }
  }
}

export default DeleteEvent
