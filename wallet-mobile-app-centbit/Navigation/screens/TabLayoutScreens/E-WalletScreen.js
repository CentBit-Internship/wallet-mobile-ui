import * as React from 'react'
import { Text, View , SafeAreaView, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../../Constants/colors';
import WalletCard from '../../../Components/WalletCard';
import icon from "../../../assets/mastercard.png"


export default function EwalletScreen(){
     let carditems = [{
          id:1,
          image:icon,
          elips_tex:"**** **** **** 4826 Mastercard",
          amount_text:"$487.12"
     },
   {
     id:2,
     image:require("../../../assets/visa.png"),
          elips_tex:"**** **** **** 1147 Visa",
          amount_text:"$12 487.12"
   },
   {
     id:3,
     image:require("../../../assets/bitcoin.png"),
     elips_tex:"********4BGhYvxyxyxyxyxyxy",
          amount_text:"BTC 16,0012"
   },
   {
     id:4,
     image:require("../../../assets/paypal.png"),
     elips_tex:"**** **** ****  PayPal",
          amount_text:"$3440.20"
   }

]
     return(
          <SafeAreaProvider style={styles.main}>
              
                    <View >
                    <View style={styles.title}>
                     <Text style={styles.wallet_txt}>My wallets</Text>
                     <Image source={require('../../../assets/user-24px.png')} style={styles.right_icon}/>
                    </View>
                    <View style={styles.major}>
                         {carditems.map((item)=>{
                              return<WalletCard image={item.image} amount={item.amount_text} elips_text={item.elips_tex} id={item.id}  />
                         })}

<Pressable style={styles.card} >
      <View>
        <Image source={require("../../../assets/wallet.png")} style={styles.image} />
      </View>
      <View>
        <Text style={styles.last_style}>ADD NEW WALLET</Text>
      </View>
    </Pressable>
                         

                    </View>

                    </View>
                   
               
          </SafeAreaProvider>
     );
}

const styles = StyleSheet.create({
     main:{
          backgroundColor:COLORS.colorDarkBlue,
          alignContent:'center',
          minHeight:"80%"
     },
     title:{
          marginTop:"3%",
          display: 'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          textAlign:'center',
          


     },
     right_icon:{
          left:120

          
     },
     wallet_txt:{
          lineHeight:'70%',
          color:'#ffffff',
          alignItems:'center',
          textAlignVertical:'center',
          fontSize:'20pt',
          fontStyle:'bold',
          fontFamily:'nunito'
          
     

     },
     major:{
         
          height:'80%',
          
         display:'flex',
         flexDirection:'column',
        
         
        
          paddingHorizontal:'5%',
          
          

     },
     card: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          
      //   marginTop:'4%',
      marginVertical:'2.3%',
      borderRadius:"10%", 
      shadowColor:"rgba(0, 0, 0, 0.1)",
      alignItems:'center',
      shadowProp: {  
          shadowOffset: {width: -2, height: 4},  
          shadowColor: '#171717',  
          shadowOpacity: 0.2,  
          shadowRadius: 3,  
        },  
      
      
          
          
         
          height:"16%",
         
         
          backgroundColor:'#404cb2'
        },
        image: {
          height: 50,
          width: 80,
          justifyContent:'center'
        },
        last_style:{

       fontSize:16,
       fontFamily:'Nunito',
       color:'#fff',
       letterSpacing:1,
       fontWeight:'700',
       lineHeight:18,
       textDecorationStyle:'solid',
       fontStyle:'normal',
       marginStart:35
       
       
        },


     
})