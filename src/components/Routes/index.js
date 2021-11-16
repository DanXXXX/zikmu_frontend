import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Actu from '../../pages/Actu'
import Contact from '../../pages/Contact'
import CourseForm from '../../pages/CourseForm'
import Error404 from '../../pages/Error404'
import EventForm from '../../pages/EventForm'
import ListEvent from '../../pages/ListEvent'
import Login from '../Log/Login'
import MusicForm from '../../pages/MusicForm'
import PostForm from '../../pages/PostForm'
import Signup from '../Log/Signup'
import UserProfile from '../../pages/UserProfile'
import Map from '../../pages/Map.jsx'
import Home from '../../pages/Home'
import Profil from '../../pages/Profil'
import Log from '../Log'
import NewPostForm from '../Post/NewPostForm'
import Logout from '../Log/Logout'

export default function index() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/register' component={Log} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/event" component={ListEvent} />
                <Route path="/event/submit" component={EventForm} />
                <Route path="/post/submit" component={NewPostForm} />
                <Route path="/course/submit" component={CourseForm} />
                <Route path="/songs/submit" component={MusicForm} />
                <Route exact path="/user/profil" component={Profil} />
                <Route exact path="/user/logout" component={Logout} />
                <Route path="*" component={Error404} />
            </Switch>
        </div>
    )
}
