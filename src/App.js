import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        workers: []
    };

    removerWorker = index => {
        const { workers } = this.state;
    
        this.setState({
            workers: workers.filter((worker, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = worker => {
        this.setState({workers: [...this.state.workers, worker]});
    }

    render() {
        const { workers } = this.state;
        
        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    workersData={workers}
                    removerWorker={this.removerWorker}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;