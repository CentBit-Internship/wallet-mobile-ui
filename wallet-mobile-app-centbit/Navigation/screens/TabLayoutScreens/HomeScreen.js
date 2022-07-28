import * as React from 'react'
import { View, ScrollView} from 'react-native';
import HomeFirstComponent from '../../../Components/HomeFirstCom';
import HomeFourthComponent from '../../../Components/HomeFourthCom';
import HomeSecondComponent from '../../../Components/HomeSecondComp';
import HomeThirdComponent from '../../../Components/HomeThirdCom';
import { COLORS } from '../../../Constants/colors';


export default function HomeScreen({navigation}){
     return(
          <View style={{
               backgroundColor: COLORS.colorDarkBlue,
               flex: 1
          }}>
               <HomeFirstComponent/>
               <HomeSecondComponent/>
               <ScrollView>
                    <HomeThirdComponent navigation={navigation}/>
                    <HomeFourthComponent />
               </ScrollView>
               
          </View>
     );
}