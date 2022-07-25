import * as React from 'react'
import { Text, View } from 'react-native';

export default function MainContainer(){
     return(
          <View>
               <Text style={{color: 'black'}}>
                    This is the Main Container. It contains every other screen.
               </Text>
          </View>
     );
}