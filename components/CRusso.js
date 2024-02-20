import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';

export function CRussoScreen() {
    return(
        <SafeAreaView style={style.container}>
        
            <Text style={style.text}>Chocolate Russo</Text>
            
                <View style={style.card}>
                    <Image source={require("../assets/chocolate1.png")} style={style.cardimg}></Image>                  
                </View>

                <View style={style.viewtxt}>
                    <Text style={style.txt}>Casquinha de chocolate ao leite 36% cacau decorada com chocolate branco e recheada com creme à base de leite condensado, chocolate branco, glicose de milho e vermut - bebida alcoólica igual martini (o álcool é evapora no cozimento, então não é considerado um bombom alcoólico).</Text>
                </View>

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#301e1e'
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
        width: '85%',
        height: 300,
        borderRadius: 15,
        marginTop: 15,
      },
      cardimg:{
        width: '100%',
        height: 230
      },
      viewtxt:{
        flex: 1
      },
      txt: {
        textAlign: 'center',
        color: '#fff'
      }
});