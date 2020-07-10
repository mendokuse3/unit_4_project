import React, {Component} from 'react'

class Locations extends Component {
    state = {
        locations: []
    }

    componentDidMount(){
        this.getLocations();
    }

    getLocations = () => {
        fetch('http://localhost:3000/locations')
        .then(response => response.json())
        .then(data => this.setState({locations: data}))
        .catch(err => console.log(err))
    }

    render(){
        return (
            <div className='location-div'>
                <h1>We have locations in the following:</h1>
                {this.state.locations.length > 1 && 
                this.state.locations.map(location => {
                    return(
                        <div key={location.id}>
                            <h3>{location.city}, {location.state}, {location.country}</h3>
                            <button onClick={() => this.props.checkOutBikes(location.id)}>Check Out Bikes</button>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default Locations