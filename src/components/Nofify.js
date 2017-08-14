import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class Notify extends Component {
    render() {
        return (
            <View style={styles.containDemo}>
                <Text style={styles.cssText}>Push notification on IOS AND Android</Text>
                <Text style={styles.cssText}>Thông báo message giống zalo, sms...</Text>
                <Text style={styles.cssText}>Đang demo</Text>
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

export default Notify;