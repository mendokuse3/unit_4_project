import React, {Component} from 'react'

class Form extends Component {
    state = {
        make: ''
    }

    handleChange = (event) => {
        this.setState({[
            event.currentTarget.id]: event.currentTarget.value
        })
    }
    render(){
        return (
            <div className='form-div'>
                <h2>Post your bike</h2>
                <form>
                    <label htmlFor='make'>Make:</label>
                    <input type='text' id='make' onChange={this.handleChange} value={this.state.make}/>
                    <label htmlFor='model'>Model:</label>
                    <input type='text' id='model' onChange={this.handleChange} value={this.state.model}/>
                    <label htmlFor='year'>Year:</label>
                    <input type='number' id='year' onChange={this.handleChange} value={this.state.year}/>
                    <label htmlFor='bike_class'>Class:</label>
                    <input type='text' id='bike_class' onChange={this.handleChange} value={this.state.bike_class}/>
                    <label htmlFor='price'>Price:</label>
                    <input type='number' id='price' onChange={this.handleChange} value={this.state.price}/>
                    <label htmlFor='img'>Image:</label>
                    <input type='text' id='img' onChange={this.handleChange} value={this.state.img}/>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' onChange={this.handleChange} value={this.state.email}/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default Form