import React from 'react';
import { StyleSheet, Button } from 'react-native';

const FetchLocation = props =>{
  return(
         <Button title="get location" onPress={props.onGetLocation}/>
  );
};

export default FetchLocation;