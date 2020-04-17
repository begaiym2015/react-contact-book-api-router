import React, { Component } from 'react';
import './AddContact.css';

class AddContact extends Component {
    state = {
        name: '',
        surname: '',
        phone: '',
        status: false
    }

    handleChangeName = (e) =>{
        const name = e.target.value;
        this.setState({ name });
    }

    handleChangeSurname = (e) => {
        const surname = e.target.value;
        this.setState({ surname });
    }

    handleChangephone = (e) => {
        const phone = e.target.value;
        this.setState({ phone })
    }

    handleAddContact = () => {
        this.props.onAdd(this.state);

        this.setState({ name:'', surname:'', phone:'' })
    }
    

    render() {
        return (
            <div className="add-contact">
                <input placeholder="name" value={this.state.name} 
                onChange={this.handleChangeName} />
                <input placeholder="surname" value={this.state.surname} 
                onChange={this.handleChangeSurname} />
                <input placeholder="phone" type="number" value={this.state.phone} 
                onChange={this.handleChangephone}/>
                <button onClick={this.handleAddContact}
                >Add contact</button>
               
            </div>
        );
    }
}

export default AddContact;