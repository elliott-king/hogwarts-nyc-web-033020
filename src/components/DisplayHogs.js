import React, {Component} from 'react'
import HogCard from './HogCard'

class DisplayHogs extends Component {

  state = {
    filter: null,
  }

  renderHogs = () => {
    return this.props.hogs.map(hog => {
      if (this.state.filter === null) {
        return <HogCard hog={hog}/>
      } else {
        return hog.greased ? <HogCard hog={hog} /> : null
      }
    })
  }

  handleFilterClick = (event) => {
    console.log("You have clicked the filter button")
    // iterate over each hog, access the 'greased'
    // if greased => render its card, otherwise don't bother

    if (this.state.filter === null) {
      this.setState({filter: "a non null string"})
    } else {
      this.setState({filter: null})
    }

    // button 'show ungreased' -> undo
  }

  buttonText = () => {
    return this.state.filter === null ? "Show only greased hogs" : "Show all hogs"
  }
  
  render() {
    return (
      <div>
        <p>This is the display hogs component</p>
        <button onClick={this.handleFilterClick}>{this.buttonText()}</button>
        <div>
          {this.renderHogs()}
        </div>
      </div>
    )
  }
}

export default DisplayHogs;