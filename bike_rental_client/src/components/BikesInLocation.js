import React, {Component} from 'react'

class BikesInLocation extends Component {
    state = {
        bikesInLocation: []
    }

    componentDidMount(){
        this.getBikesInLocation();
    }

    getBikesInLocation = () => {
        fetch('http://localhost:3000/locations/1')
        .then(response => response.json())
        .then(data => this.setState({bikesInLocation: data}))
        .catch(err => console.log(err))
    }

    render(){
        return (
            <>
            <h1>Bikes In {this.state.bikesInLocation.city}</h1>
            {this.state.bikesInLocation.bikes && 
            this.state.bikesInLocation.bikes.map(bike => {
                return (
                    <div key={bike.id}>
                        <h3>{bike.year} {bike.make} {bike.model}</h3>
                        <img src={bike.img} alt={bike.model} style={{width: '200px'}}/>
                        <button>See More</button>
                    </div>
                )
            })
            }
            </>
        )
    }
}

export default BikesInLocation