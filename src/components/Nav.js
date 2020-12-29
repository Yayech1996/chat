import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <>
            <div className='container'>
                <button className='btn btn-dark'>add</button>
                <label>search group:</label>
                <input></input>
                <button className='btn btn-dark'>serach</button>
            </div>
            </>
        )
    }
}

export default Nav
