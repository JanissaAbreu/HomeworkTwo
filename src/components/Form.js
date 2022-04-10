import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    /*
            TODO - set initial state for link name and URL 
        */
       this.state = {names:"",URL:""};
  }

  handleNameChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
            this.setState({names: event.target.value});
  }

  handleURLChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
            this.setState({URL: event.target.value});
  }

  /*for onformsubmit*/
  handleSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

       /*hard form variable*/
      let name = this.state.names
      let URL = this.state.URL
      /* making object*/
      const whatever = {name,URL}
      /*the push onto favlinks/table */
      this.props.thePush(whatever);   
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value}
        onChange={this.handleNameChange} /> 
        </label>
        <br/>
        <label>
          URL:
          <input type="text" value={this.state.value}
        onChange={this.handleURLChange} /> 
        </label>
        <br/>
        <input type="submit" value="Submit" />
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
       

      </form>
    )
  }
}

export default Form
