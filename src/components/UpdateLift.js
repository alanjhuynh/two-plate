import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class UpdateLift extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          set:'',
          rep:'',
          weight:'',
          metric:'',
          note:'',
          date: ''
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
        date: this.state.date
    };
    
    //this.props.updateLift(this.props.children, data)
    
    };

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    render()
    {
        if(!this.props.show){
            return null;
        }
        return (
            <div class='update-modal'>
                <div class='modal-content'>
                <div>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <br />
                        
                        </div>
                        <div className="col-md-8 m-auto">
                        <h1 className=" text-center">UPDATE LIFT</h1>
                

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
                            <button className="btn btn-outline-warning btn-block mt-4" onClick={this.onClose}>Close</button>
                        </form>
                    </div>
                    </div>
                    
                    </div>
                
                </div>
                
                
            </div>
            </div>
        
        )
    }

}

export default UpdateLift;