import React from 'react'


class HogCard extends React.Component {


  render() {
    return (
      <div>
        <p>Name: {this.props.hog.name}</p>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Greased: {`${this.props.hog.greased}`}</p>
        <p>Weight: {this.props.hog.weight}</p>
        <p>Medal: {this.props.hog['highest medal achieved']}</p>
        <br/>
      </div>
    )
  }
}
export default HogCard;