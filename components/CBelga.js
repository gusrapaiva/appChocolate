import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';

export function CBelgaScreen() {
    return(
        <SafeAreaView style={style.container}>
        
            <Text style={style.text}>Chocolate Belga</Text>
            
                <View style={style.card}>
                    <Image source={require("../assets/chocolate2.jpg")} style={style.cardimg}></Image>                  
                </View>

                <View style={style.viewtxt}>
                    <Text style={style.txt}>Segundo os padrões de qualidade do país, os chocolates belgas devem ter pelo menos 35% de cacau em sua composição, e não podem ter a adição de aditivos químicos e outras gorduras vegetais além da manteiga de cacau.</Text>
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