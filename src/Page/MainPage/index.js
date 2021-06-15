import React from 'react'

// Component
import Navbar from '../../Component/Navbar'
import Jumbotron from '../../Component/Jumbotron'
import Fitur from '../../Component/Fitur'

function MainPage() {
    return (
        <div className="container">
            <Navbar />
            <Jumbotron />
            <Fitur />
        </div>
    )
}

export default MainPage
