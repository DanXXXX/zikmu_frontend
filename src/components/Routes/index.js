import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Actu from '../../pages/Actu'
import Contact from '../../pages/Contact'
import CourseForm from '../../pages/CourseForm'
import Error404 from '../../pages/Error404'
import EventForm from '../../pages/EventForm'
import ListEvent from '../../pages/ListEvent'
import Login from '../../pages/Login'
import MusicForm from '../../pages/MusicForm'
import PostForm from '../../pages/PostForm'
import SignUp from '../../pages/Signup'
import UserProfile from '../../pages/UserProfile'
import Map from '../../pages/Map.jsx'

export default function index() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Actu} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/event" component={ListEvent} />
                    <Route path="/event/map" component={Map} />
                    <Route path="/event/submit" component={EventForm} />
                    <Route path="/post/submit" component={PostForm} />
                    <Route path="/course/submit" component={CourseForm} />
                    <Route path="/songs/submit" component={MusicForm} />
                    <Route path="/user/profil" component={UserProfile} />
                    <Route path="*" component={Error404} />
                </Switch>
            </Router>
        </div>
    )
}
