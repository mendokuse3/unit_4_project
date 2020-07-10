import React, {Component} from 'react'

class Bike extends Component {
    state = {
        bike: []
    }

    componentDidMount(){
        this.getBike();
    }

    getBike = () => {
        fetch('http://localhost:3000/bikes/1')
        .then(response => response.json())
        .then(data => this.setState({bike: data}))
        .catch(err => console.log(err))
    }

    render(){
        const showBike = this.state.bike
        return (
            <>
            <h1>Bikes</h1>

            {this.state.bike && 
                <div key={showBike.id}>
                    <h3>{showBike.year} {showBike.make} {showBike.model}</h3>
                    <img src={showBike.img} alt={showBike.make} style={{width: '200px'}}/>
                    <button>See More</button>
                </div>
            }
            </>
        )
    }
}

export default Bike