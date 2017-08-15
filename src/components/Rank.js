import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
class Rank extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../icon/increase.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    };
    render() {
        return (
            <View style={styles.containDemo}>
                <Text style={styles.cssText}>Bảng Xếp Hạng</Text>
            </View>
        );
    }
}
const styles =  StyleSheet.create({
    containDemo: {
        flex: 1,
        justifyContent: 'center',// css center giữa màn hình, cách đều ( Top, bottom)
        alignItems: 'center' //// css center giữa màn hình ( Left và Right )
    },
    cssText: {
        color: '#00a920',
        padding: 10,
        fontSize: 18
    },
    icon: {
        width: 26,
        height: 26,
    },
});

export default Rank;