import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';

export function HomeScreen({navigation}) {
    return(
        <View style={style.container}>
            <ImageBackground source={require("../assets/bg.jpg")} resizeMode="cover" style={style.bg}>
        
                <Text style={style.text}>Chocolatery</Text>

                <ScrollView style={style.scroll}>

                    <TouchableOpacity onPress={() => navigation.navigate('CRusso')}>  
                        <View style={style.card}>
                            <Text style={style.txtcard}>Chocolate Russo</Text>
                            <Image source={require("../assets/chocolate1.png")} style={style.cardimg}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('CBelga')}>
                        <View style={style.card}>
                            <Text style={style.txtcard}>Chocolate Belga</Text>
                            <Image source={require("../assets/chocolate2.jpg")} style={style.cardimg2}></Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('CFrances')}>
                        <View style={style.card}>
                            <Text style={style.txtcard}>Chocolate Francês</Text>
                            <Image source={require("../assets/chocolate3.png")} style={style.cardimg2}></Image>
                        </View>
                    </TouchableOpacity>

                </ScrollView>

            </ImageBackground>
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // width: '100%'
    },
    bg: {
        flex: 1,
        // justifyContent: 'center'
    },
    text: {
        marginTop: 25,
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
      },
      card:{
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#301e1ef2',
        // maxHeight: '40%',
        width: '85%',
        height: 300,
        borderRadius: 15,
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

elevation: 21,
      },
      txtcard:{
        marginTop: 8,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '500',
        color: '#fff'
      },
      cardimg:{
        width: '70%',
        height: 250
      },
      cardimg2:{
        marginTop: 15,
        width: '65%',
        height: 220
      },
      scroll: {
        flex: 1,
        width: '100%',
        height: '100%'
      }
});