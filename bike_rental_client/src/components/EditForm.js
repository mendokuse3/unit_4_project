import React, {Component} from 'react'

class EditForm extends Component {
    state = {
        // formInputs: {
            make: this.props.bike.make,
            model: this.props.bike.model,
            year: this.props.bike.year,
            class: this.props.bike.class,
            price: this.props.bike.price,
            img: this.props.bike.img,
            email: this.props.bike.email
        // },

    }

    handleChange = (event) => {
        this.setState({[event.target.id]:event.target.value})
        this.props.bike[event.target.id] = event.target.value
    }

    updatebike = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/bikes/${this.props.currentBike}`, {
            body: JSON.stringify(this.state),
            method: "PUT",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
        })
        this.props.hideEditForm()
    }

    render(){
        return (
            <div className='form-div'>
                <h2>Edit your bike</h2>
                <form onSubmit={this.updatebike}>
                <div className='form-input'>
                        <label htmlFor='make'>Make: </label>
                        <input type='text' id='make' onChange={this.handleChange} value={this.props.bike.make}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='model'>Model: </label>
                        <input type='text' id='model' onChange={this.handleChange} value={this.props.bike.model}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='year'>Year: </label>
                        <input type='number' id='year' onChange={this.handleChange} value={this.props.bike.year}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='bike_class'>Class: </label>
                        <input type='text' id='bike_class' onChange={this.handleChange} value={this.props.bike.bike_class}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='price'>Price: </label>
                        <input type='number' id='price' onChange={this.handleChange} value={this.props.bike.price}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='img'>Image: </label>
                        <input type='text' id='img' onChange={this.handleChange} value={this.props.bike.img}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' id='email' onChange={this.handleChange} value={this.props.bike.email}/>
                    </div>
                    <input className='submit-form' type='submit' />
                </form>
            </div>
        )
    }
}

export default EditForm