import React, { Component, PureComponent  } from 'react';
import { View,Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import ViewCosplay from './ViewCosplay';
class Main extends PureComponent  {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../icon/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    };

    constructor(props){
        super(props);
        this.state = {
            arrCosPlay: [],
            isLoading: false,
            offset: 0,
            limit: 10,
            error: false,
            refresh: false,
            page: 1,
        }
    }
    componentDidMount(){
        this.setState((prevState) => ({ ...prevState, refresh: true }));
        this.makeRequest();
    };
    refreshNew() {
        this.setState({
            page: 1,
            refresh: true
        }, () => {
                this.makeRequest();
            }
        );
    };
    makeRequest = () => {
        const { page } = this.state;
        const URL = `http://tinanime.com/api/genres/cosplay/news/?p=${page}`;
        fetch(URL)
        .then(res => res.json())
        .then(resJson => {
            this.setState({
                arrCosPlay: page === 1 ? resJson.data : [...this.state.arrCosPlay, ...resJson.data],
                isLoading: false,
                refresh: false,
                error: null
                
            });
        })
        .catch(e => this.setState({ isLoading: false, }))
    };
    handleLoadMore () {
        this.setState({
            ...this.state, page: this.state.page + 1, isLoading: true 
        }, () => {
              this.makeRequest();
            }
        );
    };
    renderFooter = () => {
        if (!this.state.isLoading) return null;
        return (
            <View style={ styles.horizontal }>
                <ActivityIndicator animating size="large" color="#00aa00" />
            </View>
        );
    };

    render() {
        const { arrCosPlay, refresh } = this.state;
        return (
            <View style={styles.container}>
                <FlatList 
                 refreshing={refresh}
                 onRefresh={() => this.refreshNew()} // lấy tin tức mới nhất khi Pull to Refresh.
                 onEndReachedThreshold={0.5}
                 onEndReached={() => this.handleLoadMore()}
                 data={arrCosPlay}             
                 keyExtractor={item => item.id}
                 renderItem={({item}) =>
                    <ViewCosplay item = {item} />
                 }
                ListFooterComponent = {this.renderFooter}
                />
              
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor:"#e8e8e8", 
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8
    },
    icon: {
        width: 26,
        height: 26,
    },
})
export default Main;