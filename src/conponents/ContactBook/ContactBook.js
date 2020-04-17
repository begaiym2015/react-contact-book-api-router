import React, { Component } from 'react';
import axios from 'axios';


import List from '../List/List';
import AddContact from '../AddContact/AddContact';


import Edit from '../Edit/Edit';



class ContactBook extends Component {
  state = {
    data:[]
}

componentDidMount(){
  this.fetchContacts();
}

fetchContacts = async() => {
  const {data} = await axios.get('http://localhost:8001/contacts');
  // console.log(result);
  this.setState({ data });
}

handleAdd = async (user) => {
await axios.post('http://localhost:8001/contacts', user);
this.fetchContacts();

}

handleDelete = async (id) => {
  await axios.delete(`http://localhost:8001/contacts/${id}`);
  this.fetchContacts();
}

handleChangeStatus = async (index, id) => {
  const newData = [...this.state.data]
  newData[index].status = !newData[index].status
  await axios.put(`http://localhost:8001/contacts/${id}`, newData[index]);
  this.fetchContacts();
}
handleEdit = async (user) => {
    await axios.get('http://localhost:8001/contacts', user);
    this.fetchContacts();
}

checkPage = (currentContact) => this.props.page === undefined || this.props.page === currentContact;

  render() {
    return (
      <div className="contact-book">
        
        {this.checkPage('ADD') && <AddContact onAdd = {this.handleAdd} /> }

        {this.checkPage('LIST') && (
         <List 
         contact = {this.state.data}
         onDelete={this.handleDelete}
         onChange={this.handleChangeStatus}
         /> )}
         
        {this.checkPage('EDIT') && <Edit edit = {this.handleEdit} /> }
        
      </div>
    );
  }
}

export default ContactBook;