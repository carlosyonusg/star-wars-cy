import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux';
import { login } from '../../store/actions';
import styles from './styles';
import { bindActionCreators } from 'redux';

// const Login = ({ counter: { count }, action, navigation }: any) => (
//   <View style={styles.container}>
//     <Text>Login!</Text>
//     <TouchableOpacity onPress={() => action.increment(count)}>
//       <Text>+</Text>
//     </TouchableOpacity>
//     <Text>{count}</Text>
//     <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
//       <Text>-</Text>
//     </TouchableOpacity>
//     <StatusBar style="auto" />
//   </View>
// );

const Login = ({ action, navigation, auth: { isAuth } }: any) => {
  useEffect(() => {
    if(isAuth) {
      navigation.navigate('dashboard');
    }
  }, [isAuth])

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => action.login({})}>
        <Text>Bienvenidos</Text>
        <Text>  al mundo</Text>
        <Text> Star Wars </Text>
        <Text>           </Text>
        <Text> 1  Personajes</Text>
        <Text>*2  Planetas</Text>
        <Text>*3  Vehiculos</Text>
        <Text>*4  Peliculas32</Text>
        <Text>             </Text>
        <Text>*Por implementar</Text>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const mapStateToProps = ({ auth }: any) => ({ auth })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    login
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
