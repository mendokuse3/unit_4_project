import React, {Component} from 'react'

class Bikes extends Component {
    state = {
        bikes: []
    }

    componentDidMount(){
        this.getBikes();
    }

    getBikes = () => {
        fetch('http://localhost:3000/bikes')
        .then(response => response.json())
        .then(data => this.setState({bikes: data}))
        .catch(err => console.log(err))
    }

    render(){
        return (
            <>
            <h1>Bikes</h1>
            {this.state.bikes.length > 1 && 
            this.state.bikes.map(bike => {
                return(
                    <div key={bike.id}>
                        <h3>{bike.year} {bike.make} {bike.model}</h3>
                        <img src={bike.img} alt={bike.make} style={{width: '200px'}}/>
                        <button>See More</button>
                    </div>
                )
            })
            }
            </>
        )
    }
}

export default Bikes