import React, { useContext,useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image,Button ,SafeAreaView,ScrollView,StatusBar} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Modal from 'react-native-modal';
import {Body, Header, Left} from 'native-base';
import { Icon } from 'react-native-elements';
import { StarOutlined, StarFilled, StarTwoTone, HeartOutlined } from '@ant-design/icons';


const DetailsScreen = ({navigation}) => {

  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.view}>
    <Header><Left style={{flexDirection: 'row'}}>
        <Icon name="menu" size={39}
        onPress={() => navigation.openDrawer()} />
        <Image source ={require('../Images/lealmart-logo.png')}
                style = {{ width: 28,height: 28, marginTop: 7, marginLeft: 8 }}
                />
        
        </Left><Body style={{marginLeft: '5.0%'}}><Text style={{ fontSize: 28 }}>Carousel</Text></Body></Header>
        
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
          
        </TouchableOpacity>
        
        
      </View>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <SliderBox
        style={styles.SliderBox}
        images={[
          require('../Images/cl1.jpg'),
          require('../Images/cl2.jpg'),
          require('../Images/cl3.jpg')
        ]}
        resizeMethod={"resize"}
        resizeMode={"cover"}
        autoplay
        circleLoop
        dotColor="#343D59"
      ></SliderBox>
      <View style={{ flexDirection:"row",marginHorizontal:10 }}>
        <View style={{ width: "80%", marginTop: 15 }}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.details}>Item1</Text>
          <Text style={styles.price}>$120</Text>
          <Text style={{color:"black"}}>Product Offer  20% discount Diwali sale</Text>
          

        </View>
      
        
        <View style={{ marginLeft: 15 ,marginTop:30,marginHorizontal:10}}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              backgroundColor: "#FF2D88",
              alignItems: "center",
              marginBottom: 5,
              justifyContent:"center",
            }}
          >
            
            {/* <Icon
              name="heart"
              style={{ fontSize: 25, color: "white"}}
            ></Icon> */}
          
            
          </View>
          <TouchableOpacity>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                backgroundColor: "#F8C009",
                alignItems: "center",
                marginTop: 5,
                justifyContent:'center'
              }}
            >
              {/* <Icon
                name="shoppingcart"
                style={{ fontSize: 30, color: "white",  }}
              ></Icon> */}
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              backgroundColor: "white",
              alignItems: "center",
              marginTop: 7,
              justifyContent:'center'
            }}
          >
            {/* <Icon
              name="md-share"
              style={{ fontSize: 30, color: "#2F9DFB"}}
            ></Icon> */}
          </View>
        </View>
      </View>
      <TouchableOpacity   onPress={toggleModal} >
      <View style={styles.bank}>
          <Text
            style={{
              color: "white",
              fontFamily: "Roboto",
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            Show Bank Offers
        </Text>
        </View>

<Modal style={{backgroundColor:"white"}}isVisible={isModalVisible}>
  <View style={{marginVertical:10,flex:1}}>
    <Text style={{marginVertical:10}}>Get cashback upto rupess 200 with payement from HDFC Debit card (Valid only for product price of 999 and above)</Text>
    <Text style={{marginVertical:10}}>Pay from Paytm Get cashback upto rupess 100(Valid only for product price of 499 and above)</Text>
    </View>
    <Button title="BACK" onPress={toggleModal} />
  
</Modal>
</TouchableOpacity>

      <TouchableOpacity 
        
        
      >
        <View style={styles.buy}>
          <Text
            style={{
              color: "white",
              fontFamily: "Roboto",
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            BUY NOW
        </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
          width: 300,
          height: 140,
          borderRadius: 10,
          marginTop: 15,
          alignSelf:'center',
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            marginTop: 12,
            marginLeft: 18,
            fontFamily: "Roboto",
            color: "#343D59",
            fontWeight: "500",
          }}
        >
          About this item:
        </Text>
        <Text
          style={{
            marginLeft: 17,
            fontSize: 12,
            fontFamily: "Roboto",
            color: "#343D59",
            marginRight: 17,
          }}
        >
          Tis is the description of item.

        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          width: 300,
          height: 140,
          borderRadius: 10,
          marginTop: 15,
          alignSelf:'center',
          backgroundColor: "white",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            marginTop: 12,
            marginLeft: 18,
            fontFamily: "Roboto",
            color: "#343D59",
            fontWeight: "500",
          }}
        >
          Reviews:
        </Text>
        <Text
          style={{
            marginLeft: 17,
            fontSize: 12,
            fontFamily: "Roboto",
            color: "#343D59",
            marginRight: 17,
          }}
        >
          XXXXXXXXXXXXXXXX


        </Text>
      </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

DetailsScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#F6F7FC",
    flex: 1,
  },
  image: {
    width: 28,
    height: 28,
    marginTop: 8,
    marginLeft: 10,
    alignSelf: "stretch",
  },
  icon: {
    alignSelf: "center",
    color: "#FF2D88",
    fontSize: 35,
    marginTop: 5,
  },
  top: {
    flexDirection: "row",
  },
  menu: {
    alignSelf: "center",
    color: "#343D59",
    fontSize: 35,
    marginTop: 5,
  },
  arrow: {
    color: "#343D59",
    fontSize: 35,
    alignSelf: "center",
    marginTop: 17,
    paddingLeft: 10,
  },
  SliderBox: {
    height: 250,
    width: "100%",
    alignSelf:"center",
    borderRadius: 27,
    marginTop: 20,
  },
  name: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#353E5A",
    marginTop: 10,
  },
  details: {
    fontSize: 19,
    fontFamily: "Roboto",
    color: "#353E5A",
  },
  price: {
    fontSize: 25,
    fontFamily: "Roboto",
    color: "#353E5A",
    fontWeight: "700",
  },
  buy: {
    width: 261,
    height: 36,
    alignItems: "center",
    alignSelf:'center',
    borderRadius: 10,
    backgroundColor: "#975EFF",
    paddingTop: 6,
    marginTop: 10,
    elevation:8
  },
  icon1: {
    fontSize: 28,
    color: "white",
    marginTop: 4,
    marginRight: 2,
  },
  bank:{
    width: 261,
    height: 36,
    alignItems: "center",
    alignSelf:'center',
    borderRadius: 10,
    backgroundColor: "#009ff5",
    paddingTop: 6,
    marginTop: 10,
    elevation:8

  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    
   
  },
});

export default DetailsScreen;
