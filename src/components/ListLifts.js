import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LiftCard from './LiftCard';
import CreateLift from './CreateLift';

class ListLifts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: [
        {
            "_id": "6109dab520b09f6fb98ccc60",
            "name": "Squat",
            "set": 5,
            "rep": 3,
            "weight": 315,
            "metric": "lb",
            "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi vitae suscipit tellus mauris a.",
            "date": "2021-01-01T17:09:00.000Z",
            "__v": 0
        },
        {
            "_id": "6109dabc20b09f757d8ccc61",
            "name": "Bench",
            "set": 3,
            "rep": 8,
            "weight": 225,
            "metric": "lb",
            "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "date": "2021-01-01T17:09:00.000Z",
            "__v": 0
        },
        {
            "_id": "6109daee20b09f7eec8ccc62",
            "name": "Deadlift",
            "set": 1,
            "rep": 1,
            "weight": 500,
            "metric": "lb",
            "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "date": "2021-01-01T17:09:00.000Z",
            "__v": 0
        }
    ],
      addLift: true
    };
  }

  addLift = () => {
    this.setState({
      addLift:!this.state.addLift
    })
  }

  addNewLift = (l) =>
  {
    //console.log(l)
    //console.log(this.lifts)
    this.setState(prevstate => ({
      lifts: [...prevstate.lifts, l]
    }))
  }

  deleteLift = (id) =>
  {
    this.setState(prevstate => ({     	
      lifts: prevstate.lifts.filter(lift => lift._id !== id)
    }))
  }

  updateLift = (id, l) =>
  {
    const newlifts = this.state.lifts.slice();
    newlifts[id] = l;
    this.setState({
      lifts: newlifts
    })
  }

  render() {
    const lifts = this.state.lifts;
    //console.log("ListLifts: " + lifts);
    let liftList;

    

    if(!lifts) {
      liftList = "You do not have any lifts";
    } else {
      liftList = lifts.reverse().map((lift, k) =>
        <LiftCard lift={lift} key={k} deleteLift={this.deleteLift} />
      );
    }

    return ( 
      
        <div className="row">
          <div className="col-sm-3 sidebar bg-dark">
            
              <br></br><br></br>
              <h1 class="text-white centered">TWO PLATE</h1>
              <hr class="text-white"></hr>

              <Link to='/dashboard'> 
                <h4 class="text-white centered active">
                <span class="icon text-white">
                  <i class="fas fa-chart-line"></i>
                </span>
                  dashboard
                </h4>
              </Link>

              <Link to='/'> 
                <h4 class="text-white centered">
                <span class="icon text-white">
                <i class="fas fa-home"></i>
                </span>
                  landing page
                </h4>
              </Link>

              <CreateLift addLift={this.addLift} addNewLift={this.addNewLift}/>
               <br></br>
               <p class="text-white padding"> note: current deployment is frontend only and all functionalities (i.e. "update") have not been adjusted for client side. Source code with three tier architecture can be found at <a href='https://github.com/alanjhuynh/fitness-tracker'>here</a>. Adjustment were made because source code is writing to a single DB table so clients will view the same data. </p>
            </div>

          <div className="col padding main">
            {liftList}
          </div>
        </div>
        
    );
  }
}

export default ListLifts;