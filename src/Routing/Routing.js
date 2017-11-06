import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Layout from '../Component/Layout'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import Todo from '../pages/Todo'

 const TestRouting = () => (

    <Router>
        <div>
       {/*     <ul>
                <li><Link to="/">Layout</Link></li>
                <li><Link to="/Header">Header</Link></li>
                <li><Link to="/Footer">Footer</Link></li>
            </ul>*/}
        <Route exact path ="/" component ={Layout}/>
        <Route path ="/Header" component ={Header}/>
        <Route path ="/Footer" component ={Footer}/>
            <Route path ="/Todo" component ={Todo}/>
        </div>
    </Router>
)
/* const BasicExample = () => (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
            </div>
        </Router>
        )*/


export default TestRouting
