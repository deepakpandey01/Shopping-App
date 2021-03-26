import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Body, Header, Left} from 'native-base';


function Login(){
    const [value, setValue]=useState();
    const [pwd, setPwd]=useState();

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Header><Left /><Body><Text>Login</Text></Body></Header>
        <View>
            <Text>Email</Text>
            <TextInput value={value} onChangeText={text => setValue(text)} />
            <Text>{value}</Text>
        </View>
        <View>
            <Text>Password</Text>
            <TextInput secureTextEntry value={pwd} onChangeText={text => setPwd(text)} />
            <Text>{value}</Text>
        </View>
        <Button><Text>Login</Text></Button>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
});

export default Login;