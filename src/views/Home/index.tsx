import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux';
import { characters } from '../../store/actions';
import styles from './styles';
import { bindActionCreators } from 'redux';


const charactersList = ({ action, navigation, swApi: {characters}  }: any) => {
  useEffect(() => {

     
    if(!characters.length) {
            action.characters()
    }

    })

  
  return (
    <View style={styles.container}>
      <Text style={styles.container.titleText}> Personajes de StarWars</Text>
      {
        characters.map((i:any, index:any) => <Text key={index}>{i.name} </Text>)
      }
      <StatusBar style="auto" />
    </View>
  )
}

const mapStateToProps = ({ swApi }: any) => ({ swApi })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    characters
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(charactersList);
