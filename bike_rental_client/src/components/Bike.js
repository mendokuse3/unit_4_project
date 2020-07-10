import React, {Component} from 'react'

class Bike extends Component {
    state = {
        bike: []
    }

    componentDidMount(){
        this.getBike();
    }

    getBike = () => {
        fetch(`http://localhost:3000/bikes/${this.props.currentBike}`)
        .then(response => response.json())
        .then(data => this.setState({bike: data}))
        .catch(err => console.log(err))
    }

    render(){
        const showBike = this.state.bike
        return (
            <>
            <div className='bike-div'>
                {this.state.bike && 
                    <div key={showBike.id}>
                        <h1>{showBike.year} {showBike.make} {showBike.model}</h1>
                        <img src={showBike.img} alt={showBike.make} style={{width: '350px'}}/>
                        <p>Year: {showBike.year}</p>
                        <p>Manufacturer: {showBike.make}</p>
                        <p>Model: {showBike.model}</p>
                        <p>Class: {showBike.bike_class}</p>
                        <p>Price per day: ${showBike.price}</p>
                        <p>Email: {showBike.email}</p>
                    </div>
                }
            </div>
            <button onClick={this.props.goBack}>Go Back To Bikes</button>
            <button onClick={this.props.goHome}>Go Back To Locations</button>
            </>
        )
    }
}

export default Bike