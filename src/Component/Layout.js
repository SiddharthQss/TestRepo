import React from 'react'

import Footer from './Footer'
import Header from './Header'
import Todo from '../pages/Todo'
import {Link} from 'react-router-dom'

export default class Layout extends React.Component{
    constructor() {
        super()
        this.state = {title: "will"};
    }

    changeTitle(title)
    {
        this.setState({title})
    }
    render()
        {


        return(
            <div>
                <Link to ="Header">Header</Link><br/>
                <Link to ="Footer">Footer</Link><br/>
                <Link to ="Todo">Todo</Link>
            </div>
        )
    }
}