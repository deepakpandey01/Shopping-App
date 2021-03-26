import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image, ScrollView, SafeAreaView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {Body, Header, Left, Right} from 'native-base';
import { Icon } from 'react-native-elements';



const DATA = [{
    title: require("../Images/cl1.jpg")
    },
    {
        title:require("../Images/cl2.jpg")
    },
    ];
 
const SECTIONS = [
  {
    title: 'Offer1',
    content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
  {
    title: 'Offer2',
    content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.',
  },
];
 
function AccordionView({navigation}) {
    const [activeSections, setActiveSections]=useState([]);
 
  function _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
        <Icon name="add" size={20}  />
      </View>
    );
  };
 
  function _renderContent(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };
 
  function _updateSections(activeSections) {
    setActiveSections(activeSections);
  };
 
    return (
        <SafeAreaView>
        <Header><Left style={{flexDirection: 'row'}}>
        <Icon name="menu" size={39}
        onPress={() => navigation.openDrawer()} />
        <Image source ={require('../Images/lealmart-logo.png')}
                style = {{ width: 28,height: 28, marginTop: 7, marginLeft: 8 }}
                />
        
        </Left><Body style={{marginLeft: '20.0%'}}><Text style={{ fontSize: 28 }}>Offers</Text></Body>
        </Header>
        <FlatList  
     keyExtractor={friend=> Math.random().toString()}
     data={DATA}
     numColumns={2}
     renderItem={({item})=>{
      return <View style={styles.box}>
      
           <View style={styles.img}>
            <Image source = {item.title}
                style = {{ width: "99.9%", height: 170, borderRadius: 10 }}
                /></View>
        <View style={styles.content1}>
            <Text style={{color: 'black',fontWeight:'bold',fontSize:15,textDecorationLine: 'underline',
            textAlign: 'center', justifyContent: 'center', alignSelf: 'center' }}>Offer {item.title}</Text>
            </View>
            
         </View>
     }}/> 
        <Text style={styles.bank}>Bank Offers</Text>
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
      />
      </SafeAreaView>
    );
  }


const styles=StyleSheet.create({
    content: {
        backgroundColor: 'gray',
        margin: 15,
        padding: 4,
        borderRadius: 8 
    },
    header: {
        height: 40,
        borderWidth: 2,
        borderColor: '#27A5Ef',
        margin: 12,
        marginBottom: 0,
        padding: 5,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bank: {
        width: 115,
        borderRadius: 10,
        padding: 5,
        margin: 5,
        fontSize: 20,
        backgroundColor: '#27A5Ef',
    },
    box: {
        width: "40%",
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 30,
        height: 220,
        marginLeft: "5%",
        borderRadius:10,
        marginHorizontal:10,
        alignSelf: 'center',
    },
    content1: {
        alignSelf: 'center',
        textAlign: 'center'
    },
    low: {
        marginBottom: 155,
        flexDirection: 'row',
        backgroundColor:'black',
    },
    img: {
        borderRadius:10,
    }

});

export default AccordionView;