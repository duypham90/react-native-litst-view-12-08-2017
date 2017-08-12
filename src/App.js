import React, { Component } from 'react';
import { View,Text, FlatList, StyleSheet } from 'react-native';

const defaultState = {
    arrWords: [
        { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
        { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
        { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
        { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
        { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
        { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
        { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
        { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
        { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
        { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
        { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
        { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
        { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
        { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
    ],
    filterStatus: 'SHOW_ALL',
    idAding: false
};
class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                 data={defaultState.arrWords}
                 renderItem={({item}) => <Text>{item.vn}</Text>}
                 keyExtractor={item => item.id}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 20
    }
})
export default App;