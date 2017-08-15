import React, { Component } from 'react';
import { View,Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import ViewItem from './ViewItem';
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrNews: [],
            isLoading: false,
            offset: 0,
            limit: 10,
            error: false,
            refresh: false,
            page: 1
        }
    }
    componentDidMount(){
        this.setState((prevState) => ({ ...prevState, refresh: true }));
        this.makeRequest();
    }
    
    refreshNew(){
        this.setState({
            page: 1,
            refresh: true
        }, () => {
                this.makeRequest();
            }
        );
    }
    makeRequest = () => {
        const { page } = this.state;
        const URL = `http://tinanime.com/api/genres/tin-tuc-anime/news/?p=${this.state.page}`;
        fetch(URL)
        .then(res => res.json())
        .then(resJson => {
            this.setState({
                arrNews: page === 1 ? resJson.data : [...this.state.arrNews, ...resJson.data],
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
        const { arrNews, refresh } = this.state;
        return (
            <View style={styles.container}>
                <FlatList 
                 refreshing={refresh}
                 onRefresh={() => this.refreshNew()} // lấy tin tức mới nhất khi Pull to Refresh.
                 onEndReachedThreshold={0.5} // vị trí item cuối khi vượt màn hình sẽ load more
                 onEndReached={() => this.handleLoadMore()}
                 data={arrNews}             
                 keyExtractor={item => item.id}
                 renderItem={({item}) =>
                    <ViewItem item = {item} />
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
})
export default Main;