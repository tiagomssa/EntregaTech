/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  TouchableHighlight
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      category: ""
    }
  }

  componentDidMount(){
    setTimeout(
      () => { this.setState({isLoading : false}); },
      2000
    );
  }
  render() {
    if(this.state.isLoading)
    {
      return (
        <View style={styles.container}>
        <Image
          source={require('./logo2.png')}
          style={styles.logo}
        />
        </View>
      );
    }
    else{
      return (
        <View style={{flex: 1}}>
          <View style={styles.head}>
          <Image
          source={require('./logo2.png')}
          style={styles.logoHead}
        />
          </View>
          <View style={styles.body}>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.category}
            onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
            <Picker.Item label="Selecione a Categoria" value="" />
            <Picker.Item label="Restaurantes e lanchonetes" value="1" />
            <Picker.Item label="Supermecados" value="2" />
            <Picker.Item label="Drogarias" value="3" />
            <Picker.Item label="Distribuidoras Diversas" value="4" />
          </Picker>
          <TouchableHighlight onPress={() => {}}>
          <View style={styles.button}><Text style={{color: 'white', fontSize: 20}}>ENTRAR</Text></View>
          </TouchableHighlight>
          </View>
        </View>
      );
    }
  }
}
//#8cc63f -- fontWeight: 'bold'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150
  },
  logoHead: {
    width: 115,
    height: 115
  },
  head:{
    flex: 0.2,
    alignItems: 'center'
  },
  body:{
    flex: 0.8,
    alignItems: 'center'
  },
  picker:{
    width: '100%',
    height: 100,
    borderColor: '#8cc63f', 
    borderWidth: 2
  },
  button:{
    backgroundColor: '#8cc63f',
    width: 400,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});
