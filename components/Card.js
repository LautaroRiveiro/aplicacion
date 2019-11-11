import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import type PeliculaResponse from '../api/PeliculaResponse';

type Props = {
    pelicula: PeliculaResponse,
    onPress: (id: number)=>void
}

const Card = (props: Props) => {
    return (
        <TouchableOpacity onPress={() => props.onPress(props.pelicula.id)} style={styles.container}>
            <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={{uri: `${'https://image.tmdb.org/t/p/w154/'}${props.pelicula.poster_path}`}}
            >
                <View style={styles.zocalo}>
                    <Text style={styles.titulo}>{props.pelicula.title}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 6,
        width: 130,
        height: 240,
        elevation: 3,
    },
    zocalo: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "black",
        opacity: 0.6,
        justifyContent: "center"
    },
    titulo: {
        color: 'white',
        textAlign: "center",
        fontSize: 16,
        marginVertical: 12,
        paddingHorizontal: 4
    }
});

export default Card;
