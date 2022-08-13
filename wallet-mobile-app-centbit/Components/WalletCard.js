import React from "react";

import { Pressable, Image, StyleSheet, View, Text, } from "react-native";

export default function WalletCard({ image, elips_text, amount, id }) {
  return (
    <Pressable style={styles.card} key={id}>
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View>
        <View style={styles.elip_text}>
          <Text style={styles.elips}>{elips_text}</Text>

          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop:'3%',
//   marginTop:'4%',
marginVertical:'3%',
borderRadius:10, 
// shadowColor:"rgba(0, 0, 0, 0.1)",
// shadowProp: {  
//     shadowOffset: {width: -2, height: 4},  
//     shadowColor: '#171717',  
//     shadowOpacity: 0.2,  
//     shadowRadius: 3,  
//   },  


    
    
   
    height:"16%",
   
   
    backgroundColor:'#ffffff'
  },
  image: {
    height: 50,
    width: 80,
    justifyContent:'center'
  },
  elip_text: {
    display: "flex",
    flexDirection: "column",
    gap: "6pt",
  },
  elips: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13,
    alignItems: "center",
    lineHeight: 20,
    color: "#3d6670",
  },

  amount: {
    fontSize: 17,
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.02,
    fontStyle: "normal",
    // fontFamily: "IBM Plex Sans",
  },
});
