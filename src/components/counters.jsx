import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends React.Component {
    state= {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 3},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }
    deleteComponent = counterId =>{
        const counters = this.state.counters.filter(counter => counter.id != counterId);
        this.setState({counters: counters});
    }
    render() { 
        return (<div>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} value={counter.value} onDelete={this.deleteComponent} id={counter.id}>
                <h5>Counter #{counter.id}</h5>
            </Counter>)}
        </div>);
    }
}
 
export default Counters ;