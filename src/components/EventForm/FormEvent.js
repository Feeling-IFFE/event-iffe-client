import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EventForm = ({ event, handleSubmit, handleChange }) => {
  console.log(event)
  return (
    <div className="row2">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Event</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder='Enter a title'
              value={event.title}
              name='title'
              onChange={handleChange}
            />

            <Form.Label>Date</Form.Label>
            <Form.Control
              placeholder='Date'
              value={event.date}
              name='date'
              type='date'
              onChange={handleChange}
            />

            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder='Write a description...'
              value={event.description}
              name='description'
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            varient="primary"
            type="submit">Submit
          </Button>
          <Link to="/">
            <Button varient="secondary">Cancel</Button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default EventForm
