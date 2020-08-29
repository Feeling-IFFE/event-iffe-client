import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

const Footer = () => (
  <MDBFooter className="main-footer font-small pt-4 mt-4">
    <MDBContainer fluid className="text-center text-md-left">
      <MDBRow>
        <MDBCol sm="4">
          <h5 className="title">Group gitHub repo</h5>
          <a href="https://github.com/Feeling-IFFE">Groups gitHub</a>
        </MDBCol>
        <MDBCol md="2">
          <h5 className="title">{'Leni\'s gitHub'}</h5>
          <ul>
            <li className="list-unstyled">
              <a href="https://github.com/lenilunderman">gitHub</a>
            </li>
          </ul>
        </MDBCol>
        <MDBCol md="2">
          <h5 className="title">{'Alyssa\'s gitHub'}</h5>
          <ul>
            <li className="list-unstyled">
              <a href="#!">gitHub</a>
            </li>
          </ul>
        </MDBCol>
        <MDBCol md="2">
          <h5 className="title">{'Dave\'s gitHub'}</h5>
          <ul>
            <li className="list-unstyled">
              <a href="https://github.com/Dave-92-stack">gitHub</a>
            </li>
          </ul>
        </MDBCol>
        <MDBCol md="2">
          <h5 className="title">{'Tristan\'s gitHub'}</h5>
          <ul>
            <li className="list-unstyled">
              <a href="https://github.com/Tristan-Tompkins">gitHub</a>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </MDBFooter>
)

export default Footer
