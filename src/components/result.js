import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    voteAngulerInPercent() {
        if (this.store.getState().angular) {
            return (this.store.getState().angular / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100;
        } else {
            return 0;
        }
    }
    voteReactInPercent() {
        if (this.store.getState().react) {
            return (this.store.getState().react / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100;
        } else {
            return 0;
        }
    }
    voteVuejsInPercent() {
        if (this.store.getState().vuejs) {
            return (this.store.getState().vuejs / (this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs)) * 100;
        } else {
            return 0;
        }
    }

    voteAngulerInPercentStyle() {
        return {
            width: this.voteAngulerInPercent() + '%'
        };
    }

    voteReactInPercentStyle() {
        return {
            width: this.voteReactInPercent() + '%'
        };
    }

    voteVuejsInPercentStyle() {
        return {
            width: this.voteVuejsInPercent() + '%'
        };
    }

    render() {
        let totalVote = this.store.getState().angular + this.store.getState().react + this.store.getState().vuejs;
        return (
            <div className="container">
                <div>
                    <h3 className="text-center">Total vote: {totalVote}</h3>
                </div>
                <div className="row">
                    <div className="col-12">
                        <span className="d-inline-block bg-danger text-white p-1">Angular: {this.voteAngulerInPercent().toFixed(2) + '%'}</span>
                        <div className="progress mt-1 rounded-0">
                            <div className="progress-bar bg-danger" style={this.voteAngulerInPercentStyle()}></div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <span className="d-inline-block bg-info text-white p-1">React: {this.voteReactInPercent().toFixed(2) + '%'}</span>
                        <div className="progress mt-1 rounded-0">
                            <div className="progress-bar bg-info" style={this.voteReactInPercentStyle()}></div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <span className="d-inline-block bg-success text-white p-1">Vue: {this.voteVuejsInPercent().toFixed(2) + '%'}</span>
                        <div className="progress mt-1 rounded-0">
                            <div className="progress-bar bg-success" style={this.voteVuejsInPercentStyle()}></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Results;