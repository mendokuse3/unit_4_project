import React, {Component} from 'react';
// import Bikes from './components/Bikes.js'
import Locations from './components/Locations.js'
import BikesInLocation from './components/BikesInLocation.js'

class App extends Component{
  state = {
    currentLocation: ''
  }
  render(){
    return (
      <div className='App'>
        <header>This is the header</header>
        <Locations />
        {/* <Bikes/> */}
        {/* <BikesInLocation /> */}
      </div>
    )
  }
}

export default App;
