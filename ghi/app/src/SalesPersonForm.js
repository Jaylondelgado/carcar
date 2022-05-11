import React from 'react';

class SalesPersonForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "name": '',
            "employee_number": '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployeeNumberChange= this.handleEmployeeNumberChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value});
    }
    handleEmployeeNumberChange(event) {
        const value = event.target.value;
        this.setState({ employee_number: value})
    }
    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state};
        
    }
}