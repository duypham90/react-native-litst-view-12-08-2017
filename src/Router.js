import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Main from  './components/Main';
import Rank from './components/Rank';
import News from './components/News';
import Notify from './components/Nofify';

const Router = TabNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: 'COSPLAY'
        }
    },
    Rank: {
        screen: Rank,
    },
    News: {
        screen: News,
    },
    Notify: {
        screen: Notify,
        navigationOptions: {
           headerMode: 'none'
        },
        tabBarOptions: {
            showLabel : false
        },
    },
}, {
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#e91e63',
        inactiveTintColor: 'green',       
        labelStyle: {
            fontSize: 10,
            margin: 0
        },
        style: {
            backgroundColor: '#eee',
        },
        showIcon: true,
        showLabel : true
    },
});

export default Router;