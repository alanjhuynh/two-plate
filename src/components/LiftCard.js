import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';
import UpdateLift from './UpdateLift';
import axios from 'axios';

class LiftCard extends Component {
    state = {
      show: false
    };
    onUpdateClick = (e) => {
      this.setState({
        show: !this.state.show
      })
    };

    onDeleteClick (id) {
      if(window.confirm('Are you sure you want to delete this lift?'))
      {
        this.props.deleteLift(id)
      }
    };

    render(){
      const lift = this.props.lift;
      var date = new Date(lift.date);
      date = date.toDateString();
      
      return(

        <div>
          <UpdateLift show={this.state.show} onClose={this.onUpdateClick}>{lift._id}</UpdateLift>

        
          <div className="card">
            
          <div className="card-header"><p>{date}</p> <button onClick={this.onDeleteClick.bind(this,lift._id)}>Delete</button> <button onClick={this.onUpdateClick.bind(this)}>Update</button> </div> 
            <div className="card-body">             
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <h1 className="centered">{lift.name}</h1>                   
                  </div>
                  <div className="col-sm">
                    <h1 className="centered">{lift.weight}</h1>
                    <p className="centered">{lift.metric}</p>
                  </div>
                  <div className="col-sm">
                    <h1 className="centered"> {lift.set}x{lift.rep} </h1>
                    <p className="centered">setxrep</p>
                  </div>
                  <div className="col-sm" >
                    <p> {lift.note} {/*{lift._id}*/}</p> 
                  </div>                  
                </div>
                
              </div>
            </div>
          </div>

          </div>
      )
    }
}

export default LiftCard;