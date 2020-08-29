import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

class DeleteEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      event: null,
      deleted: true,
      user: props.user
    }
  }
  componentDidMount () {
    axios(`${apiUrl}/events/${this.props.match.params.id}`)
    .then(res => this.setState({ event: res.data.event }))
    .catch(console.error)
  }
  destroyEvent = () => {

const { msgAlert } = this.props

    axios({
      url: `${apiUrl}/events/${this.props.match.params.id}`,
      method: 'DELETE',
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
      return <p>No content...</p>
    }
    if (deleted)
      return <Redirect to={`/my-events/`
      } />
      return (
        <div>
          <h4>{event.title}</h4>
          <button onClick={this.destroyEvent}>Delete Event</button>
          <Link to={`/events/${this.props.match.params.id}/edit`}>
          </Link>
          <Link to='/events'>Back to all events</Link>
        </div>
      )
    }
  }

export default DeleteEvent
