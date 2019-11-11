import React from 'react';
import {AsyncStorage, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Drawer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.item}>INICIO</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Credits')}>
                    <Text style={styles.item}>CRÉDITOS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.salirContainer} onPress={async () => {
                    AsyncStorage.clear();
                    this.props.navigation.navigate('Auth');
                }}>
                    <Text style={styles.salir}>SALIR</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    salirContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    item: {
        padding: 16,
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    salir: {
        padding: 16,
        fontSize: 20,
        borderTopWidth: 1,
        borderColor: 'grey',
    },
});
