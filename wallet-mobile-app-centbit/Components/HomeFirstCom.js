import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../Constants/colors';

export default function HomeFirstComponent(){
     return(
          <View style={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               padding: 20,
          }}>
               <View>
                    <Text style={{
                         color: COLORS.colorDarkGray,
                         marginBottom: 5,
                         fontSize: 15
                    }}>
                         Welcome back
                    </Text>
                    <Text style={{
                         color: COLORS.colorWhite,
                         fontSize: 22,
                         fontWeight: '900'
                    }}>
                         Rifat Sarkar
                    </Text>
               </View>
               <View>
                    <TouchableOpacity
                         style={{
                              backgroundColor: COLORS.colorDarkGray,
                              padding: 12,
                              borderRadius: 50
                         }}
                         // onPress={{}}
                         >
                         <Ionicons name={'person-outline'} size={25} color={COLORS.colorWhite}/>
                    </TouchableOpacity>
                         
               </View>
          </View>
     );
}