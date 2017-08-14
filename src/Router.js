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
    },
}, {
    tabBarOptions: {
        activeTintColor: '#e91e63',
        inactiveTintColor: 'green',       
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#eee',
        },
    },
});

export default Router;