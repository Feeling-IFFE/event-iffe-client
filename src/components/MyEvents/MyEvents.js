import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import moment from 'moment'
// This will be our Events Index component (show all Events)
class Events extends Component {
  constructor (props) {
    super(props)
    // setup our initial state
    this.state = {
      // we have zero Events, until our API request has finished
      events: [],
      user: props.user
    }
  }
  componentDidMount () {
    // Make a request for all of the Events
    // const token = this.state.user ? `Token token=${this.state.user.token}` : ''
    axios({
      url: `${apiUrl}/userevents`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      },
      // fix the pass of data
      data: { ownerEvent: this.state.user._id }
    })
      .then(res => this.setState({ events: res.data.events }))
      .catch(console.log)
  }

  render () {
    const events = this.state.events.map(event => (
      <Link key={event._id} to={`/events/${event._id}`}>
        <div className="card cardHover mb-4 card-body">
          <div className="card-header mb-4" >
            {event.title}
          </div>
          <div className="card-text mb-4">
            {event.description}
          </div>
          <div className="mb-4">
            Event Date: {moment(event.date).format('LLLL')}
          </div>
        </div>
      </Link>
    ))
    return (
      <div className="my-Events">
        <h4 className="currentMyEvent">My Current Events</h4>
        {events}
      </div>
    )
  }
}
export default Events
