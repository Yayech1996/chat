import React, { Component } from 'react'

export class GroupsList extends Component {
    render() {
        return (
            <div className='container'>
             <ul>
                         <li>GROUP 1</li>
                         <button>UPDATE</button>
                         <button>DELETE</button>
                         <li>GROUP 2</li>
                         <button>UPDATE</button>
                         <button>DELETE</button>
                         <li>GROUP 3</li>
                         <button>UPDATE</button>
                         <button>DELETE</button>
            </ul>
            </div>
        )
    }
}

export default GroupsList
