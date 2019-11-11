import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class CreditsScreen extends React.Component {

    static navigationOptions = (props) => ({
        title: '',
        headerStyle: {
            backgroundColor: 'transparent',
        },
        headerRight: () => (
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={styles.menu}>
                <Text>MENÚ</Text>
            </TouchableOpacity>
        ),
    });

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                       source={{uri: 'https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png'}}/>
                <Text style={styles.texto}>Este producto utiliza la API TMDb pero no está avalado ni certificado por
                    TMDb.</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 125,
        height: 50,
    },
    texto: {
        fontSize: 16,
        marginTop: 16,
        paddingHorizontal: 24,
        textAlign: 'center',
    },
    menu: {
        paddingHorizontal: 12,
    },
});
