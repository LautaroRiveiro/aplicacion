import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getEnCartelera, getPopulares, getProximosEstrenos} from '../api/api';
import type PeliculaResponse from '../api/PeliculaResponse';
import Spacer from '../components/Spacer';
import Card from '../components/Card';

type State = {
    loading: boolean,
    enCartelera: PeliculaResponse[],
    populares: PeliculaResponse[],
    proximosEstrenos: PeliculaResponse[],
}

export default class HomeScreen extends React.Component<{}, State> {
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

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            enCartelera: [],
            populares: [],
            proximosEstrenos: [],
        };
    }


    componentDidMount() {
        this.props.navigation.setParams({onSalir: this._signOutAsync});
        this._obtenerPeliculas();
    }

    _obtenerPeliculas = async () => {
        this.setState({loading: true});
        let peliculas = await Promise.all([
            getEnCartelera(),
            getPopulares(),
            getProximosEstrenos(),
        ]);
        this.setState({
            loading: false,
            enCartelera: peliculas[0],
            populares: peliculas[1],
            proximosEstrenos: peliculas[2],
        });
    };

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="purple"/>
                </View>
            );
        }

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.titulo}>En cartelera</Text>
                <Spacer height={12}/>

                <ScrollView style={styles.fila} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.state.enCartelera.map((pelicula, key) => (
                        <Card key={key} pelicula={pelicula} onPress={this.irADetalle}/>
                    ))}
                </ScrollView>

                <Spacer height={24}/>
                <Text style={styles.titulo}>Populares</Text>
                <Spacer height={12}/>

                <ScrollView style={styles.fila} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.state.populares.map((pelicula, key) => (
                        <Card key={key} pelicula={pelicula} onPress={this.irADetalle}/>
                    ))}
                </ScrollView>

                <Spacer height={24}/>
                <Text style={styles.titulo}>Próximos estrenos</Text>
                <Spacer height={12}/>

                <ScrollView style={styles.fila} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {this.state.proximosEstrenos.map((pelicula, key) => (
                        <Card key={key} pelicula={pelicula} onPress={this.irADetalle}/>
                    ))}
                </ScrollView>

                <Spacer height={48}/>
            </ScrollView>
        );
    }

    irADetalle = (id: number) => {
        this.props.navigation.push('Details', {id});
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    fila: {
        flexDirection: 'row',
    },
    menu: {
        paddingHorizontal: 12,
    },
});
