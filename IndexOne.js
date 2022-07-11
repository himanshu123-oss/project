import React,{useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button
} from 'react-native';

import Calculator  from '../Reusesable/Calculator';


const IndexOne = () => {
    
    return(
        <SafeAreaView style={styles.container}>
        
        
        
        <View style={styles.container}>
            
            <View style={{flex:0.4,backgroundColor:'rgb(42,38,46)',
            width:'100%',
            }}>
            <Text style={{color:'white',textAlign:'right',fontSize:60,paddingTop:'60%'}}>
            9

            </Text>

            </View> 

             <View style={{flex:0.6,borderWidth:2}}>
                <View style={[styles.subContainer,{flexDirection:'row'}]}> 
                       
                          
                      <View style={styles.subContainer} >
                      <Calculator name='C'/>
                      </View>

                      <View style={styles.subContainer} >
                      <Calculator name='+/-'/>

                      </View>

                      <View style={styles.subContainer} >
                      <Calculator name='%'/>

                       </View> 

                       <View style={styles.subContainer} >
                       <Calculator name='/' color={backgroundColor='rgb(254,157,44)'}/>
                                 
                        </View>

                </View>

                <View style={[styles.subContainer,{flexDirection:'row'}]}> 
                       
                          
                      <View style={styles.subContainer} >
                      <Calculator name='7'/>

                      </View>

                      <View style={styles.subContainer} >
                      <Calculator name='8'/>

                      </View>

                      <View style={styles.subContainer} >
                      <Calculator name='9'/>

                       </View> 

                       <View style={styles.subContainer} >
                       <Calculator name='x' color={backgroundColor='rgb(254,157,44)'}/>

                        </View>

                </View>

                <View style={[styles.subContainer,{flexDirection:'row'}]}> 
                       
                          
                      <View style={styles.subContainer} >

                      <Calculator name='4'/>
                      </View>

                      <View style={styles.subContainer} >

                      <Calculator name='5'/>
                      </View>

                      <View style={styles.subContainer} >

                      <Calculator name='6'/>
                       </View> 

                       <View style={styles.subContainer} >
                       <Calculator name='_' color={backgroundColor='rgb(254,157,44)'}/>

                        </View>

                </View>
                <View style={[styles.subContainer,{flexDirection:'row'}]}> 
                       
                          
                      <View style={styles.subContainer} >
                      <Calculator name='1'/>

                      </View>

                      <View style={styles.subContainer} >

                      <Calculator name='2'/>
                      </View>

                      <View style={styles.subContainer} >
                      <Calculator name='3'/>

                       </View> 

                       <View style={styles.subContainer} >

                       <Calculator name='+' color={backgroundColor='rgb(254,157,44)'}/>
                        </View>

                </View>

                <View style={[styles.subContainer,{flexDirection:'row'}]}> 
                      
                          
                      <View style={[styles.subContainer,{flex:2}]} >

                      <Calculator name='0'/>
                      </View>

                      <View style={styles.subContainer} >

                      <Calculator name='.'/>
                      </View>

                      <View style={styles.subContainer} >
                      <Calculator name='=' color={backgroundColor='rgb(254,157,44)'}/>

                       </View> 

                       

                </View>

               
           
            </View> 



        </View>
        </SafeAreaView>
   
    )
}





const styles= StyleSheet.create({






  container:{

    flex:1,
   
   backgroundColor:'rgb(92,91,95)',
  
    
},
subContainer:{
    flex:1,
    borderWidth:1
}





})
export default IndexOne;