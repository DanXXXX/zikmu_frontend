import React from "react";
import axios from "axios";

import { useState } from "react";
import { render } from "@testing-library/react";

export default function Contact(props) {
    const {handleSubmit, useState: {errors}} = useState();

    const onSubmit = (data) => {
        console.log(data);
    }

    const [data, setdata] = useState(initialState)

handleSubmit(e){
    e.preventDefault(); 
    axios({
        method: "POST", 
        url: "http: localhost:4000/Contact",
        data: this.state    
    }).then((response)=>{
        if (response.data.status === 'success'){
            alert("Message sent."); 
            this.restForm()
        } else if (response.data.status === 'fail') {
            alert("Message failed to send. ")
        }

        })
    }

    resetForm(){
        this.setState({
            fullName: '',
            email: '', 
            message :''
        })
    }


render() {
  return (
    <div className="contactForm">
      <h1 className="title">Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} method="POST">
          <div className="form-group">
              <label htmlFor="fullName">fullname</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange(onChange)} />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange(onChange))} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange(onChange)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  );
  }

onNameChange(event) {
    this.setState({fullName: event.target.value})
}

onEmailChange(event) {
    this.setState({email: event.target.value})
}

onMessageChange(event) {
    this.setState({message: event.target.value})
}
