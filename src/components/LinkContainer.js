import React from 'react'
import Table from './Table'
import Form from './Form'
// import Table from './Table';
// import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */
    this.state = {favLinks: [ {name: "names", URL: "Example URL"}]}
  }

  handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */  
       var links = this.state.favLinks;
       if (index !== -1){
         links.splice(index,1);
         this.setState({favLinks: links});
       }
       
  }

  handleSubmit = (favLink) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
            var list = this.state.favLinks;
            var length = this.state.favLinks.length;
            favLink.id = length + 1;
            list.push(favLink);
            /*consol.log = s.o.p*/ 
            console.log(favLink);
            this.setState({favLinks: list});
       
  }
  
  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table links = {this.state.favLinks} rem={this.handleRemove} /> 
        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form thePush = {this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
