import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { connect } from 'react-redux';
console.log('user:')

const Dashboard = ({ auth: { user } }: any) => (
//  <Text>{ user.name }</Text>

    <View style={styles.container}>
       <Text>{ user.name}</Text>


      <StatusBar style="auto" />
    </View>
    
);

const mapStateToProps = ({ auth }: any) => ({ auth });


export default connect(mapStateToProps)(Dashboard);
