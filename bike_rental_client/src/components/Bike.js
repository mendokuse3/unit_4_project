import React, {Component} from 'react'
import EditForm from './EditForm.js'

class Bike extends Component {
    state = {
        bike: [],
        editBike: false
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

    showEditForm = () => {
        this.setState({editBike: !this.editBike})
    }

    hideEditForm = () => {
        this.setState({editBike: false})
    }

    findLedger = () => {
        fetch(`http://localhost:3000/ledgers`)
        .then(response => response.json())
        .then(ledgers => ledgers.find(ledger => {
            if(ledger.bike_id === this.props.currentBike && ledger.location_id === this.props.currentLocation){
                this.deleteLedger(ledger.id)
                return 'stop'
            }
        }))
    }

    deleteLedger = (id) => {
        fetch(`http://localhost:3000/ledgers/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        .then( () => {
            fetch(`http://localhost:3000/bikes/${this.props.currentBike}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            this.props.goHome()
        })
    }

    render(){
        const showBike = this.state.bike
        return (
            <>
            {!this.state.editBike &&
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
                <div className='edit-or-delete'>
                    <button onClick={this.showEditForm} >Edit Bike</button>
                    <button onClick={this.findLedger} >Remove Bike</button>
                </div>
            </div>
            }
            {this.state.editBike &&
            <EditForm bike={this.state.bike} hideEditForm={this.hideEditForm} currentBike={this.props.currentBike}/>
            }
            <button className='back-to-bikes' onClick={this.props.goBack}>Go Back To Bikes</button>
            <button className='back-to-locations' onClick={this.props.goHome}>Go Back To Locations</button>
            </>
        )
    }
}

export default Bike