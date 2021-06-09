import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SinglePost from './pages/SinglePost'
import Post from './pages/Post'
import Projects from './pages/Projects'
import Navbar from './pages/Navbar'

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route component={Home} exact path='/' />
                <Route component={About} path='/about' />
                <Route component={SinglePost} exact path='/post/:slug' />
                <Route component={Post} path='/post' />
                <Route component={Projects} path='/projects' />
            </Switch>
        </Router>
    )
}

export default App
