import React from 'react';
import {ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import type PeliculaResponse from '../api/PeliculaResponse';
import {getPelicula} from '../api/api';
import Spacer from '../components/Spacer';

type State = {
    loading: boolean,
    pelicula: PeliculaResponse | undefined
}

export default class DetailsScreen extends React.Component<{}, State> {

    static navigationOptions = (props) => ({
        title: '',
        headerTransparent: true,
    });

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pelicula: undefined,
        };
    }

    componentDidMount(): void {
        let id = this.props.navigation.getParam('id');
        this._obtenerPelicula(id);
    }

    _obtenerPelicula = async (id: number) => {
        this.setState({loading: true});
        let pelicula = await getPelicula(id);
        this.setState({
            loading: false,
            pelicula,
        });
    };

    render() {
        if (this.state.loading || !this.state.pelicula) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="purple"/>
                </View>
            );
        }

        let pelicula = this.state.pelicula;
        let fecha = new Date(pelicula.release_date);

        return (
            <ScrollView>
                <Image style={styles.imagen}
                       resizeMode="cover"
                       source={{uri: `${'https://image.tmdb.org/t/p/w780/'}${pelicula.backdrop_path}`}}
                />
                <View style={styles.container}>
                    <Spacer height={6}/>
                    <Text style={styles.titulo}>{pelicula.title}</Text>
                    <Text>Título original: {pelicula.title}</Text>

                    <Spacer height={6}/>
                    <View style={styles.fila}>
                        <Text>Año: {fecha.getFullYear()}</Text>
                        <Spacer width={12}/>
                        <Text>Valoración: {pelicula.vote_average}/10</Text>
                    </View>

                    <Spacer height={6}/>
                    <View style={styles.fila}>
                        {pelicula.genres.map((genero, i) => (
                            <Text style={styles.genero} key={i}>{genero.name}</Text>
                        ))}
                    </View>

                    <Spacer height={16}/>
                    <Text style={styles.sinopsis}>{pelicula.overview}</Text>

                </View>
            </ScrollView>
        );
    }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    imagen: {
        width: '100%',
        height: window.height * 0.35,
    },
    container: {
        padding: 12,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    fila: {
        flexDirection: 'row',
    },
    genero: {
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        padding: 4,
        marginRight: 4,
        fontSize: 10,
    },
    sinopsis: {
        lineHeight: 18,
    },
});
