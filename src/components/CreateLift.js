import React, { Component } from 'react';
import { Navigate, Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateLift extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      set:'',
      rep:'',
      weight:'',
      metric:'',
      note:'',
      date: '',
      _id: 0
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      set: this.state.set,
      rep: this.state.rep,
      weight: this.state.weight,
      metric: this.state.metric,
      note: this.state.note,
      date: this.state.date,
      _id: this.state._id
    };

    this.props.addNewLift(data)
    this.setState({ _id: this.state._id + 1 })
    this.setState({
      name: '',
      set:'',
      rep:'',
      weight:'',
      metric:'',
      note:'',
      date:''
    })
    this.props.addLift()
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              
            </div>
            <div className="col-md-8 m-auto">
              <h1 className=" text-center">CREATE LIFT</h1>
      

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='name of lift'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
           

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='set'
                    name='set'
                    className='form-control'
                    value={this.state.set}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='rep'
                    name='rep'
                    className='form-control'
                    value={this.state.rep}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='weight'
                    name='weight'
                    className='form-control'
                    value={this.state.weight}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='metric'
                    name='metric'
                    className='form-control'
                    value={this.state.metric}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='notes (optional)'
                    name='note'
                    className='form-control'
                    value={this.state.note}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type="datetime-local"
                    placeholder='today'//{today} //TO-DO: make today default date
                    name='date'
                    className='form-control'
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateLift;