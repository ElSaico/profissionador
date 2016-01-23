'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Profissionador from './profissionador';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sua próxima carreira</Text>
                <Text style={styles.welcome}>
                    A crise afetou você? Existem várias carreiras onde
                    você pode fazer uma recolocação profissional. Por exemplo:
                </Text>
                <Profissionador/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#F5FCFF'
    },
    title: {
        fontSize: 36,
        textAlign: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('profissionador', () => App);
