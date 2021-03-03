import React, { Component } from 'react';
import axios from 'axios';




class Robots extends Component {
    state = {
        robots: []
      }
    
      componentWillMount () {
        this.getAllRobots()
      }
    
      getAllRobots = async () => {
          try{
        const res = await axios.get('/api/robots')
        console.log(res)
        this.setState({robots: res.data})
      }
        catch (err) {
            console.log(err)
        }
      }

  render () {
    return (

        <div>
          <h1>List of Robots </h1>
          <ul>
              {this.state.robots.map(robot =>
                <li key={robot.id}> {robot.name} {robot.attack} {robot.defense}</li>
                )}
          </ul>
        </div>
    )
  }
}

export default Robots;