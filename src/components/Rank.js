import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class Rank extends Component {
    render() {
        return (
            <View style={styles.containDemo}>
                <Text style={styles.cssText}>BANgr Xeeps hang</Text>
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
    }
});

export default Rank;