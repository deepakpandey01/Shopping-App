import React, { useState } from 'react';
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';
import {Body, Header, Left} from 'native-base';
import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import { Icon } from 'react-native-elements'

import { scrollInterpolator, animatedStyles } from './second';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [{
        title: require("../Images/cl1.jpg")
        },
        {
            title:require("../Images/cl2.jpg")
        },
        {
            title: require("../Images/cl3.jpg")
        },
        {
            title: require("../Images/cl4.jpg")
        }];



export default function Carousel1({navigation}) {
  const [index, setIndex]=useState(0);
  const c=0;

  

  function _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Image style={{height: ITEM_HEIGHT, width: ITEM_WIDTH, borderRadius: 8}} source={item.title} />
      </View>
    );
  }
  
return (
      <View>
        <Header><Left style={{flexDirection: 'row'}}>
        <Icon name="menu" size={39}
        onPress={() => navigation.openDrawer()} />
        <Image source ={require('../Images/lealmart-logo.png')}
                style = {{ width: 28,height: 28, marginTop: 7, marginLeft: 8 }}
                />
        
        </Left><Body style={{marginLeft: '5.0%'}}><Text style={{ fontSize: 28 }}>Carousel</Text></Body></Header>
        <Carousel
          data={DATA}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => setIndex(index)}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}    
          inactiveSlideScale={0.99}
          inactiveSlideOpacity={0.01}
          enableSnap={true}
          loop
          swipeThreshold={0}      
        />
         <Text style={styles.counter}
        >
          Item {index}
        </Text> 
      </View>
    );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    borderRadius: 8
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
