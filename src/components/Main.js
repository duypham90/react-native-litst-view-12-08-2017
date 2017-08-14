import React, { Component } from 'react';
import { View,Text, FlatList, StyleSheet, ActivityIndicator, Image } from 'react-native';
import ViewCosplay from './ViewCosplay';
class Main extends Component {
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
        const { offset, limit, page } = this.state;
        const URL = `http://tinanime.com/api/genres/cosplay/news`;     
        //const URL = `http://tinanime.com/api/news?offset=${offset}&limit=${limit}`;
        this.setState({ ...this.state, refresh: true });
        fetch(URL)
        .then(res => res.json())
        .then(resJson => {
            this.setState({
                arrCosPlay: resJson.data,
                refresh: false,
            })
        })
        .catch(err => this.setState({ ...this.state, refresh: false, error: true }));
    }
    renderFooter = () => {
        if (!this.state.isLoading) return null;
        return (
            <View style={ styles.horizontal }>
                <ActivityIndicator animating size="large" color="#00aa00" />
            </View>
        );
    };
    refreshNew(){
        this.setState({
            refresh: true
        });
        fetch('http://tinanime.com/api/genres/cosplay/news')
        .then(res => res.json())
        .then(resJson => {
            this.setState({
                ...this.state,
                arrCosPlay: resJson.data,
                refresh: false
            })
        })
        .catch(e => {
            this.setState({ ...this.state, refresh: false, error: true})
        })
    }
    loadMoreNew(){
        this.setState({
            ...this.state, page: this.state.page + 1, isLoading: true 
        }, () => {
            setTimeout(() => {
                fetch(`http://tinanime.com/api/genres/cosplay/news/?p=${this.state.page}`)
                .then(res => res.json())
                .then(resJson => {
                    this.setState({
                            arrCosPlay: this.state.arrCosPlay.concat(resJson.data),
                            isLoading: false
                    });
                })
                .catch(e => this.setState({ isLoading: false, }))
            }, 1500);      
        });
    }
    render() {
        const { arrCosPlay, refresh } = this.state;
        return (
            <View style={styles.container}>
                <FlatList 
                 refreshing={refresh}
                 onRefresh={() => this.refreshNew()} // lấy tin tức mới nhất khi Pull to Refresh.
                 onEndReachedThreshold="0.5" // vị trí item cuối khi vượt màn hình sẽ load more
                 onEndReached={() => this.loadMoreNew()}
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
})
export default Main;