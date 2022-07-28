import * as React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../Constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

export default function SendCoincreen({navigation}){
     return(
          <View style={{
               backgroundColor: COLORS.colorDarkBlue,
               flex: 1,
               // justifyContent: 'center',
               alignItems: 'center',
               justifyContent: 'space-between'
             }}>
                  {/* <StatusBar 
      backgroundColor={COLORS.colorDarkBlue}/> */}
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                         <Ionicons name={'wallet-outline'} size={32} color={COLORS.colorDarkGray} style={{marginRight: 20}}/>
                         <Text style={{ color: COLORS.colorDarkGray}}>
                              e-wallet
                         </Text>
                    </View> 
                    <View>
                    <Image source={require('../../../assets/img111.png')} style={{ height: 350, width: 350, marginTop: 30}}/>
                  </View>

                  <View style={{ backgroundColor: COLORS.colorNewBlack, alignItems: 'center', justifyContent: "space-between", 
                  padding: 20,
                  height: 300,
                  borderRadius: 30}}>
                       <Image source={require('../../../assets/img111.png')} style={{ height: 50, width: 50, marginTop: -45}}/>
                    <Text style={{ color: COLORS.colorWhite, textAlign: 'center', fontSize: 30, fontWeight: '900'}}>
                         Easy way to manage your e-wallet
                    </Text>
                    <Text style={{ color: COLORS.colorWheat, fontSize: 25, textAlign: 'center', fontWeight: '300'}}>
                         Manage your every penny and transaction with ease
                    </Text>
                    <TouchableOpacity
                              style={{
                                   backgroundColor: COLORS.colorSalmon,
                                   padding: 18,
                                   borderRadius: 50
                              }}
                              // onPress={{}}
                              >
                              <Ionicons name={'arrow-forward-outline'} size={30} color={COLORS.colorMahogany}/>
                              
                         </TouchableOpacity>
                  </View>
                    
          </View>
     );
}