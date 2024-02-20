import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, SafeAreaView} from 'react-native';

export function CFrancesScreen() {
    return(
        <SafeAreaView style={style.container}>
        
            <Text style={style.text}>Chocolate Francês</Text>
            
                <View style={style.card}>
                    <Image source={require("../assets/chocolate3.png")} style={style.cardimg}></Image>                  
                </View>

                <View style={style.viewtxt}>
                    <Text style={style.txt}>O chocolate tem textura suave e aveludada que derrete na boca, liberando o recheio rico e cremoso. O sabor Crème Brûlée é inspirado na clássica sobremesa francesa , com um sabor rico e indulgente que certamente satisfará qualquer guloso .</Text>
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