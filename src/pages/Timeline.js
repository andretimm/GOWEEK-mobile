import React, { Component } from 'react';

import { StyleSheet, View, Text } from 'react-native';


export default class Timeline extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TimeLine</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
});  