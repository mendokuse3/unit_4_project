import React, {Component} from 'react';
import Bike from './components/Bike.js'
import Locations from './components/Locations.js'
import BikesInLocation from './components/BikesInLocation.js'

class App extends Component{
  state = {
    currentLocation: '',
    currentBike: '',
    showLocation: false,
    showBike: false

  }

  checkOutBikes = (id) => {
    this.setState({
      currentLocation: id,
      showLocation: !this.state.showLocation
    })
  }

  goBack = () => {
    this.setState({
      showLocation: false,
      showBike: false
    })
  }
  showBike = (id) => {
    this.setState({
      currentBike: id,
      showBike: !this.state.showBike,
      showLocation: false
    })
  }




  render(){
    return (
      <div className='App'>
        <header>This is the header</header>
        {!this.state.showLocation && !this.state.showBike &&
        <Locations checkOutBikes={this.checkOutBikes} />
        }
        {this.state.showLocation && !this.state.showBike &&
        <BikesInLocation showBike={this.showBike} currentLocation={this.state.currentLocation} goBack={this.goBack}/>
        }
        {this.state.showBike && !this.state.showLocation &&
        <Bike goBack={this.goBack} currentBike={this.state.currentBike}/>
        }
      </div>
    )
  }
}

export default App;
