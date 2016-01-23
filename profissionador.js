'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

import cbo from './cbo2002.json';

function randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
}

class Profissionador extends Component {
    constructor(props) {
        super(props);
        this.state = {cbo: randomProperty(cbo)};
    }
    newProfession() {
        this.setState({cbo: randomProperty(cbo)});
    }
    render() {
        return <TouchableHighlight style={styles.highlight}
                            underlayColor='lightblue'
                            onPress={() => this.newProfession()}>
            <Text style={styles.output}>
                {this.state.cbo}
            </Text>
        </TouchableHighlight>
    }
}

const styles = StyleSheet.create({
    output: {
        fontSize: 24,
        textAlign: 'center'
    },
    highlight: {
        padding: 10,
        borderRadius: 8
    }
});

export default Profissionador;
