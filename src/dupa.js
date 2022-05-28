import React from "react";

class AppointmentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      hours: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form
        className="contact-form"
        onSubmit={this.handleSubmit}
        action=""
        method="POST"
      >
        <h1>
          Contact Us Make
          <br /> an Appointment
        </h1>
        <div className="form-row">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Full Name"
          />
          <label htmlFor="email">E-Mail</label>

          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="E-Mail"
          />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone No</label>

          <input
            name="phone"
            type="tel"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Phone no"
            required
          />
          <label htmlFor="hours">Appointment Hour</label>

          <input
            name="hours"
            type="time"
            value={this.state.hours}
            onChange={this.handleChange}
            placeholder="Appointment Hour"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Message"
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    );
  }
}
export default AppointmentForm;
