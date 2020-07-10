import React, {Component} from 'react';
import Bike from './components/Bike.js'
import Locations from './components/Locations.js'
import BikesInLocation from './components/BikesInLocation.js'

class App extends Component{
  state = {
    currentLocation: '',
    showLocation: false
  }

  checkOutBikes = (id) => {
    this.setState({
      currentLocation: id
    })
    this.swapShowLocation()
  }

  swapShowLocation = () => {
    this.setState({
      showLocation: !this.state.showLocation
    })
  }


  render(){
    return (
      <div className='App'>
        <Bike />
        <header>This is the header</header>
        {!this.state.showLocation &&
        <Locations checkOutBikes={this.checkOutBikes} />
        }
        {this.state.showLocation &&
        <BikesInLocation currentLocation={this.state.currentLocation} goBack={this.swapShowLocation}/>
        }
      </div>
    )
  }
}

export default App;
