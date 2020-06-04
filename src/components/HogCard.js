import React from 'react'

class HogCard extends React.Component {

  convertToSnake = (name) => {
    name = name.toLowerCase()
    name = name.split(' ').join('_')
    return name
  }

  render() {
    let pigFilename = this.convertToSnake(this.props.hog.name)
    let pigImage = require(`../hog-imgs/${pigFilename}.jpg`)
    return (
      <div>
        <p>Name: {this.props.hog.name}</p>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Greased: {`${this.props.hog.greased}`}</p>
        <p>Weight: {this.props.hog.weight}</p>
        <p>Medal: {this.props.hog['highest medal achieved']}</p>
        <img src={pigImage} />
        <br/>
      </div>
    )
  }
}
export default HogCard;