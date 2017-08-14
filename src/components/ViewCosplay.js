import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Libraries from '../libraries/libraries';
class ViewCosplay extends Component {
    render() {
        const { item } =  this.props;
        const createAt = item.published_at ? new Libraries(item.published_at,'d-m-Y').getFormattedDate() : '';
        return (
            <View style={styles.postContain}>
                <View style={styles.postImg}>
                    <Image
                    style={styles.img}
                    source={{uri: item.thumbnail}}
                    />                          
                </View>
                <View style={styles.postTitle}>
                    <View style={{ flex: 1}}>
                        <Text numberOfLines={3} style={styles.title}>{item.title} ({item.id})</Text> 
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={{textAlignVertical : 'bottom'}}>{item.views} lượt xem</Text>
                        <Text style={{textAlignVertical : 'bottom'}}>{createAt}</Text>
                    </View>                         
                </View>                 
            </View>  
        );
    }
}
const styles = StyleSheet.create({
    postContain: {
        backgroundColor:"#fff", 
        marginBottom:10, 
        padding: 5, 
        flex:1, 
        flexDirection: 'row',
        alignContent: 'stretch'
    },

    title: {
        color: '#00a920',
        fontSize: 14,
        textAlign: 'left'
    },
    img: {
        width: 120,
        height: 82
    },
    postImg: {
        flex: 1,
    },
    postTitle: {
        flex: 2,
        paddingTop: 0,
        paddingLeft: 15,
        marginTop:0
    },
    views: {
        backgroundColor: 'red',
        textAlignVertical : 'bottom'
    },
    created: {
        backgroundColor: 'yellow',
        textAlignVertical : 'bottom'
    }
})
export default ViewCosplay;