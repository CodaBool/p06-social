import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import InputGroup from 'react-bootstrap/InputGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import axios from "axios"
import { Plus } from 'react-bootstrap-icons'
// import bsCustomFileInput from 'bs-custom-file-input'

export default function NewPost() {
  const { handleSubmit, control, register } = useForm()
  // const [show, setShow] = useState(false)

  const onSubmit = (data) => {
    window.alert('This is a sample, no posts can be made at this time.')
    // const formData = new FormData();
    // formData.append('imagePost', data.postImage[0])
    // formData.append('imagePerson', data.imagePerson[0])
    // formData.append('title', data.title);
    // formData.append('firstName', data.firstName);
    // formData.append('lastName', data.lastName);
    // formData.append('email', data.email);
    // formData.append('alias', data.alias);
    // formData.append('age', data.age);
    // formData.append('lastLocation', data.lastLocation);
    // formData.append('type', data.type);
    // formData.append('status', data.status);

    // axios.post('/api/post', formData, config)
    //   .then((res) => {
    //     console.log(res)
    //     history.push(`/posts`)
    //   })
    //   .catch((err) => {
    //     alert(err)
    //   })
  }
  useEffect(() => {
    // bsCustomFileInput.init()
  }, [])
  
  return (
    <>
      {/* Modal informing about test payment info */}
      {/* <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>This is a Test Environment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This application has been frozen and no new posts can be made</p>
          <p>You can view already submitted posts at the browse tab</p>
        </Modal.Body>
        <Modal.Footer>
          <p>Thanks for visiting!</p>
        </Modal.Footer>
      </Modal > */}

      {/* Form */}
      <h1 className="display-4 my-4">Create New Post</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Basic Info <Plus size={25}/></Accordion.Header>
          <Accordion.Body>
          <Card.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control placeholder="title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control placeholder="description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Card.Body>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Person <Plus size={25} className="" /></Accordion.Header>
          <Accordion.Body>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Age</Form.Label>
            <Form.Control placeholder="age" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Location</Form.Label>
            <Form.Control placeholder="location" />
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Type</option>
            <option value="1">Sex Worker</option>
            <option value="2">Trafficker</option>
            <option value="3">Missing Person</option>
          </Form.Select>

          <Form.Select aria-label="Default select example">
            <option>Status</option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
            <option value="3">Deceased</option>
            <option value="4">Missing</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


        <Row >
          <Button className="mx-auto my-5" style={{width: "20%"}} variant="primary" type="submit">Submit</Button>
        </Row>
      </Form>
    </>
  )
}