import React, {Component} from 'react'
import HogCard from './HogCard'

class DisplayHogs extends Component {

  logHogs = (event) => {
    console.log(this.props.hogs)
  }

  // generateHogCards = () => {
  //   return this.props.hogs.map(hog => <HogCard hog={hog}/>)
  // }
  
  render() {
    const ourHog = this.props.hogs[0]
    // console.log(ourHog)

    return (
      <div>
        <p>This is the display hogs component</p>
        <button onClick={this.logHogs}>Log hogs (now we are in the display hogs component)</button>
        <div>
          {this.props.hogs.map(hog => <HogCard hog={hog}/>)}
        </div>
        {/* this.props.pets.map(pet => )
        <HogCard hog={ourHog} /> */}
      </div>
    )
  }
}

export default DisplayHogs;