import React from 'react'
import { Link } from 'react-router-dom'

const EventForm = ({ event, handleSubmit, handleChange }) => {
  console.log(event)
  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        placeholder='Enter a title'
        value={event.title}
        name='title'
        onChange={handleChange}
      />

      <label>Date</label>
      <input
        placeholder='Date'
        value={event.date}
        name='date'
        type='date'
        onChange={handleChange}
      />

      <label>Description</label>
      <input
        placeholder='Write a description...'
        value={event.description}
        name='description'
        onChange={handleChange}
      />

      <button type='submit'>Submit</button>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </form>
  )
}

export default EventForm
