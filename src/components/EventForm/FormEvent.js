import React from 'react'
import { Link } from 'react-router-dom'

const EventForm = ({ events, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder='Enter a title'
      value={events.title}
      name='title'
      onChange={handleChange}
    />

    <label>Date</label>
    <input
      placeholder='Date'
      value={events.date}
      name='date'
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder='Write a description...'
      value={events.description}
      name='description'
      onChange={handleChange}
    />

    <button type='submit'>Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default EventForm
