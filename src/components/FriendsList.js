import React, { Component } from 'react'
//rce

export class FriendsList extends Component {
    render() {
        return (
            <div className='container'>
             <ul>
                        <li>avi</li>
                        <input type="checkbox"></input>
                         <li>odi</li>
                         <input type="checkbox"></input>
                         <li>eldad</li>
                         <input type="checkbox"></input>
                         
                         <br/>
                         <button>Done</button>
            </ul>
            </div>
        )
    }
}

export default FriendsList
