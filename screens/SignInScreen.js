import React from 'react';
import {AsyncStorage, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Spacer from '../components/Spacer';

type State = {
    username: string,
    password: string,
    error: string
}

export default class SignInScreen extends React.Component<{}, State> {

    constructor(props) {
        super(props);
        this.state = {
            username: 'admin',
            password: '1234',
            error: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.bienvenido}>Bienvenido</Text>

                <Spacer height={36}/>

                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    onChangeText={text => this.setState({username: text})}
                    value={this.state.username}
                />

                <Spacer height={12}/>

                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    onChangeText={text => this.setState({password: text})}
                    value={this.state.password}
                />

                <Spacer height={12}/>

                <Text>{this.state.error}</Text>

                <Spacer height={24}/>

                <Button title="INGRESAR" color="purple" onPress={this._signInAsync}/>
            </View>
        );
    }

    _signInAsync = async () => {
        if (this.state.username == 'admin' && this.state.password == '1234') {
            await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        } else {
            this.setState({error: 'Usuario y/o contraseña incorrectos (admin - 1234)'});
        }
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    bienvenido: {
        textAlign: 'center',
        color: 'purple',
        fontSize: 30,
    },
    input: {
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 4,
        fontSize: 18,
        paddingHorizontal: 14,
    },
});
