import React, { Component } from 'react'
import { } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../apiConfig'
import moment from 'moment'
import messages from './AutoDismissAlert/messages'

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
    this.fetchallEvents(false)
    // // Make a request for all of the Events
    // const token = this.state.user ? `Token token=${this.state.user.token}` : ''
    // axios({
    //   url: `${apiUrl}/events`,
    //   method: 'GET',
    //   headers: {
    //     'Authorization': token
    //   }
    // })
    //   .then(res => this.setState({ events: res.data.events }))
    //   .catch(console.log)
  }

  fetchallEvents = (showMessage) => {
    // Make a request for all of the Events
    // const { msgAlert } = this.props
    const context = this
    console.log(context)
    const token = this.state.user ? `Token token=${this.state.user.token}` : ''
    axios({
      url: `${apiUrl}/events`,
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
      .then(res => this.setState({ events: res.data.events }, () => {
        if (showMessage) {
          context.props.msgAlert({
            heading: 'You have successfully subscribe to the event.',
            messagE: messages.signOutSuccess,
            variant: 'success'
          })
        }
      }))
      .catch(console.log)
  }

  callRsVpFUnction = (event) => {
    if (this.props.user && this.checkEventRSVP(event.rsvps, event._id)) {
      return false
    }
    const token = this.state.user ? `Token token=${this.state.user.token}` : ''
    axios({
      url: `${apiUrl}/events/${event._id}/rsvp`,
      method: 'POST',
      headers: {
        'Authorization': token
      },
      data: {
        userID: this.props.user._id,
        eventID: event._id,
        clickData: Date().now()
      }
    })
      .then(res => {
        this.fetchallEvents(true)
      })
      .catch(console.log)
  }

  checkEventRSVP = (rsvp, id) => {
    if (rsvp && Array.isArray(rsvp) && rsvp.length > 0) {
      const tmpRSVPEventArr = rsvp.filter(x => x.userID === this.props.user._id && x.eventID === id)
      if (tmpRSVPEventArr.length > 0) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  render () {
    console.log(this.state.events)
    // const eventArray = []
    // if (this.state.events && this.state.events.length > 0) {
    //   this.state.events
    // }
    const events = this.state.events.map(event => (
      <div className={this.props.user && this.checkEventRSVP(event.rsvps, event._id) ? 'green-btn' : ''} key={event._id}>
        <div className="card mb-4 card-body">
          <div className="card-header mb-4" >
            {event.title}
          </div>
          <div className="card-text mb-4">
            {event.description}
          </div>
          <form className="mb-4">
            Event Date: {moment(event.date).format('MMM Do YY')}
          </form>
          {this.props.user ? (<button onClick={(e) => this.callRsVpFUnction(event)} type="button" className={this.props.user && !this.checkEventRSVP(event.rsvps, event._id) ? 'btn btn-secondary' : 'green-btn'}> {this.props.user && this.checkEventRSVP(event.rsvps, event._id) ? <span> You have subscribed to the event </span> : <span> RSVP </span>} </button>) : ''}
        </div>
      </div>
    ))

    return (
      <div>
        <h4>Current Events</h4>
        {events}
      </div>
    )
  }
}
export default Events
