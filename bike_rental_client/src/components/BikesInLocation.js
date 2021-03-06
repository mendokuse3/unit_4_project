import React, {Component} from 'react'
import NewForm from './NewForm.js'

class BikesInLocation extends Component {
    state = {
        bikesInLocation: [],
        addBike: false
    }

    componentDidMount(){
        this.getBikesInLocation();
    }

    getBikesInLocation = () => {
        fetch(`http://localhost:3000/locations/${this.props.currentLocation}`)
        .then(response => response.json())
        .then(data => this.setState({bikesInLocation: data}))
        .catch(err => console.log(err))
    }

    goToForm = () => {
        this.setState({addBike: !this.state.addBike})
    }


    render(){
        return (
            <>
            {!this.state.addBike &&
            <div className='bikes-in-location-container'>
                <h1>Bikes In {this.state.bikesInLocation.city}</h1>
                <div className='bikes-in-location'>
                    {this.state.bikesInLocation.bikes && 
                    this.state.bikesInLocation.bikes.map(bike => {
                        return (
                            <div className='bikes-in-location-card' key={bike.id}>
                                <h3>{bike.year} {bike.make} {bike.model}</h3>
                                <img src={bike.img} alt={bike.model} style={{width: '200px'}}/>
                                <p>Price: ${bike.price}/Day</p>
                                <button onClick={() => this.props.showBike(bike.id)}>See More</button>
                            </div>
                        )
                    })
                    }
                </div>
                <button className='new-bike-button' onClick={this.goToForm} >List Your Bike</button>
            </div>
            }
            {this.state.addBike &&
            <NewForm currentLocation={this.props.currentLocation} bikesInLocation={this.state.bikesInLocation}/>
            }

            <button className='back-to-locations' onClick={this.props.goHome}>Go Back To Locations</button>
            </>
        )
    }
}

export default BikesInLocation