import { HomeOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {

    const [search, setSearch] = useState("")
    return (
        <div className="navbar">
            <div className="container">
                <ul className="left">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    {/* <li><Link to="/todos">Todos</Link></li> */}
                    <li><Link to="/about">About</Link></li>
                </ul>


                <div className="right">
                    <input onChange={e=>setSearch(e.target.value)} value={search} type="text" placeholder="search by name or title ..."/>
                    <input type="button" value="Search"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
