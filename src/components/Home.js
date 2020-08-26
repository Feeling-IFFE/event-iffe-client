import React from 'react'
import Layout from './shared/Layout'

const Home = () => {
  const homeStyles = {
    color: 'white',
    backgroundColor: 'black',
    backgroundPosition: 'fill',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div style={homeStyles}>
      <Layout>
        <h4>Welcome to Events R Us!</h4>
      </Layout>
    </div>
  )
}

export default Home
