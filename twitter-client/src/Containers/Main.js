import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../Components/Homepage';
import AuthForm from '../Components/AuthForm';

const Main = props => {
    return(
        <div className='container'>
            <Switch>
                <Route exact path='/' render={props => <Homepage{...props}/>}></Route>
                <Route exact path='/signin' render={props => {
                    return (
                        <AuthForm buttonText='Log in' heading='Welcome Back.' {...props}/>
                    )
                }}/>
                <Route exact path='/signup' render={props => {
                    return (
                        <AuthForm buttonText='Sign me up!' heading='Join Twitter today.' {...props}/>
                    )
                }}/>
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps,null)(Main));
