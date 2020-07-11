import React, {Component} from 'react'

class Form extends Component {
    state = {
        formInputs: {
            make: '',
            model: '',
            year: '',
            class: '',
            price: '',
            img: '',
            email: ''
        },
        ledgerInfo: {
            bike_id: '',
            location_id: this.props.currentLocation    
        }

    }

    handleChange = (event) => {
        const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
        this.setState(updateInput)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/locations/${this.props.currentLocation}/bikes`, {
            body: JSON.stringify(this.state.formInputs),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                formInputs: {
                    make: '',
                    model: '',
                    year: '',
                    class: '',
                    price: '',
                    img: '',
                    email: ''
                }
            })
            const updateLedger = Object.assign( this.state.ledgerInfo, { bike_id: data.id })
            this.setState(updateLedger)
        })
        .catch(err => console.log(err))
        .then( () => {
            fetch('http://localhost:3000/ledgers', {
                body: JSON.stringify({
                    bike_id: this.state.ledgerInfo.bike_id,
                    location_id: this.state.ledgerInfo.location_id
                }),
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }
        )
    }

    render(){
        return (
            <div className='form-div'>
                <h2>Post your bike</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-input'>
                        <label htmlFor='make'>Make: </label>
                        <input type='text' id='make' onChange={this.handleChange} value={this.state.formInputs.make}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='model'>Model: </label>
                        <input type='text' id='model' onChange={this.handleChange} value={this.state.formInputs.model}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='year'>Year: </label>
                        <input type='number' id='year' onChange={this.handleChange} value={this.state.formInputs.year}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='bike_class'>Class: </label>
                        <input type='text' id='bike_class' onChange={this.handleChange} value={this.state.formInputs.bike_class}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='price'>Price: </label>
                        <input type='number' id='price' onChange={this.handleChange} value={this.state.formInputs.price}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='img'>Image: </label>
                        <input type='text' id='img' onChange={this.handleChange} value={this.state.formInputs.img}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' id='email' onChange={this.handleChange} value={this.state.formInputs.email}/>
                    </div>
                    <input className='submit-form' type='submit' />
                </form>
            </div>
        )
    }
}

export default Form