import { useState } from "react"
import { StyleSheet,View, Text, Button, Image } from "react-native"

const first = require('../assets/FactsSection/1.jpg')
const second = require('../assets/FactsSection/2.jpg')
const three = require('../assets/FactsSection/3.jpg')
const four = require('../assets/FactsSection/4.jpg')
const five = require('../assets/FactsSection/5.jpg')
const six = require('../assets/FactsSection/6.jpg')
export default function CuriosityScreen(){
    const[showCards, setShowCards] = useState(false)
    // let gallery = []
    // for(let i=1; i<=6;i++){
    //     let iteration = [i].toString()
    //     let item = `../assets/FactsSection/${iteration}.jpg`
    //     gallery.push(item.toString())
    // }
    let gallery = [first, second, three, four, five, six]

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>¿Sabías qué?</Text>
                <Text style={styles.paragraph}>La tecnología y la música aportan grandes beneficios a la salud de los adultos mayores</Text>
                <Button title="Saber más" onPress={()=>setShowCards(!showCards)}/>
                
                {showCards && (
                   <View style={styles.FactContainer}>
                    
                        {gallery.map((item)=>{
                            return(
                            <Image source={item} style={styles.image}></Image>
                        )})}
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
container:{
    flex:1,
    height:'100%'
},
header:{
    height:'30%',
    width:'70%',
    backgroundColor:'skyblue'
},
title:{
    fontSize:20,
    fontWeight:"bold"

},
FactContainer:{
flexDirection:'row',
width:'100%',
flexWrap:"wrap",
justifyContent:'center'
},
image:{
    width:200,
    height:200,
    marginRight:10,
    marginTop:10
   
}


})