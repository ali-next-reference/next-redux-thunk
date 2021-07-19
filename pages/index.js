// special file name, will get a '/' url

// normal react compoment
import React from 'react'
import { connect } from 'react-redux'

export const HomePage = (props) => {
  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
