import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const EventForm = ({ events, handleSubmit, handleChange, cancelPath }) => (
  <div className="row2">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Create Event</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            placeholder='Enter a title'
            value={events.title}
            name='title'
            onChange={handleChange}
          />

          <Form.Label>Date</Form.Label>
          <Form.Control
            placeholder='Date'
            value={events.date}
            name='date'
            onChange={handleChange}
          />

          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder='Write a description...'
            value={events.description}
            name='description'
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >Submit</Button>
        <Link to={cancelPath}>
          <Button variant="secondary">Cancel</Button>
        </Link>
      </Form>
    </div>
  </div>
)

export default EventForm
