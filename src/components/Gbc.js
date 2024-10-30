/**
 * Lab Week 09 Exercise for Full Stack Development
 * @author: Jam Furaque
 */

// GBC Component for our School Name
import React, { Component } from 'react'

class Gbc extends Component {                           // In this class, I'm going to use the props 
    render() {                                          // for defining the school name
        return (
            <div>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}
export default Gbc;                                     // EXPORT so we can use it into our App.js