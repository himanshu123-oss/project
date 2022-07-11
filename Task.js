import React,{useState} from "react";
import { TextInput,StyleSheet, View,Text, SafeAreaView,Modal } from 'react-native';
import TextInputReuse from "../Reusesable/TextInputReuse";
import TouchableReuse from "../Reusesable/TouchableReuse";

const Task = ()=> {
    const[detail,setDetail]=useState(false)//for modal
    const[fullname,setFullname]=useState('') /// for fullname display in modal
    const[mail,setMail]=useState('') // for mail display in modal
    const[pass,setPass]=useState('') // for create paas display in modal
    const[conPass,setConPass]=useState('')  // for confirm pass display in modal
   const[mob,setMob]=useState('')// for mobilenumber pass dispaly in modal
   const[add,setAdd]=useState('') // for address
   const [house,setHouse]=useState('') // for house no )
   const [street,setStreet]=useState('')
   const [city,setCity]=useState('')
   const [state,setState]=useState('')




   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // for mail pattern 
   const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/; // for mobile 
   var usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/; // for username
   const strongRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
   let assign=pass;
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   const closeModal =()=>{

        setDetail(false)
        
        setFullname()
        
    }









    const openModal =()=>{
    //      if(reg.test(mail)===false){
    //        alert('email is not correct')

    //     }
    //  else {

    //          if(regex.test(mob)===false){
    //             alert('mobile number is not correct')
    //          }
    //          else{

    //           if(usernameRegex.test(fullname)===false){
    //             alert('username is not valid')
    //           }
    //           else{
    //           if(strongRegex.test(pass)===false){

    //               alert('strong password need')
    //                                               }
              
    //               else{
    //                if(assign!==conPass){alert('invalid')}
    //                   else{

            

    //                 setDetail(true)
    //                 setFullname(fullname)
    //                  setMail(mail)
    //                 setPass(pass)
    //                 setConPass(conPass)
    //                 setMob(mob)
    //                 setAdd(add)
    //                 setHouse(house)
    //                 setCity(city)
    //                 setState(state)
    //                 setStreet(street)
                 
          
    //                }
                    
    //          }

    //           }
            
    //         }
    //     }

    if(usernameRegex.test(fullname)===false){
                alert('username is not valid')
                }
                else{

                  if(reg.test(mail)===false){
                          alert('email is not correct')
                
                        }
                        else{
                          if(strongRegex.test(pass)===false){

                                          alert('strong password need')
                                                                           }
                                      
                                          else{
                                           if(assign!==conPass){alert('invalid confirm pass')}


                          else{

                            if(regex.test(mob)===false){
                                         alert('mobile number is not correct')
                                       }  else{

                                          
                    setDetail(true)
                    setFullname(fullname)
                     setMail(mail)
                    setPass(pass)
                    setConPass(conPass)
                    setMob(mob)
                    setAdd(add)
                    setHouse(house)
                    setCity(city)
                    setState(state)
                    setStreet(street)


                                       }

                                      }
                          }


                        }

                }










    }
  

return(
  
    <SafeAreaView style={styles.container}>
        
        
      
        
        <View style={styles.subconatiner}>
       <TextInputReuse
        placeholder='Full Name'
       placeholderTextColor='black'
       onChangeText={full => setFullname(full)}
       //onBlur={fullname => setBlank(fullname)}
       defaultValue=''
    
       />
       
<TextInputReuse placeholder='Email'
       placeholderTextColor='black'
       onChangeText={text => setMail(text)}
       />

<TextInputReuse placeholder='Create Password'
       placeholderTextColor='black'
       secureTextEntry={false}
       onChangeText={text => setPass(text)}
       />

<TextInputReuse placeholder='confirm password'
       placeholderTextColor='black'
       onChangeText={text => setConPass(text)}
       />
         
         <TextInputReuse placeholder='Address'
       placeholderTextColor='black'
       onChangeText={text => setAdd(text)}/> 

        <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
           <TextInputReuse color={backgroundColor='white'}  width={'100%'}placeholder='House'
          // padding={5}
          margin={1}
          keyboardType='numeric'
          placeholderTextColor='black'
          onChangeText={text => setHouse(text)} /> 
       </View>
   
       <View style={{flex:1}}>
       <TextInputReuse color={backgroundColor='white'} width={'100%'}
        //padding={5}
        margin={1}
         placeholder='Street'
       placeholderTextColor='black'
       onChangeText={text => setStreet(text)} /> 
      </View>
          
          
      <View style={{flex:1}}>
<TextInputReuse color={backgroundColor='white'} width={'100%'}
        //padding={5}
        margin={1}
         placeholder='city'
       placeholderTextColor='black' 
       onChangeText={text => setCity(text)}/> 
 </View>
       
       <View style={{flex:1}}>
        <TextInputReuse color={backgroundColor='white'} width={'100%'}
        //padding={5}
        margin={1}
         placeholder='state'
       placeholderTextColor='black' 
       onChangeText={text => setState(text)}/> 
       
       </View>

       </View>
       

<TextInputReuse placeholder='Mobile no.'
       placeholderTextColor='black'
       //keyboardType='numeric'
       maxLength={10}
       onChangeText={num=>setMob(num)}
       />
       
        </View>

        <View>
        
        
        <Modal visible={detail} >
  
          <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                   <TouchableReuse name='close' onPress={()=>closeModal()}/>

                   <View>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}}>Name : {fullname} </Text>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}}> Email : {mail}</Text>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}}>Password :{pass}</Text>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}}>confirmPass :{conPass}</Text>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}}> mobilenumber :{mob}</Text>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}}> Address :{add}</Text>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}}> housenumber :{house}</Text>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}}>  street :{street}</Text>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}}> city :{city}</Text>
                   <Text style={{fontSize:16, textAlign: 'left', paddingVertical: 3, color: 'black'}} > state :{state}</Text>
                   </View>

          </View>


    </Modal>
    
    </View>
        <View style={styles.footerConatiner}>

            <TouchableReuse name='submit' onPress={()=>openModal()}/>
             
            

       </View>

       
   
        </SafeAreaView>


)

}


const styles= StyleSheet.create({

container:{
flex:1,

backgroundColor:'skyblue'

},
subconatiner:{

    flex:0.9,
    backgroundColor:'gray',
    
},
footerConatiner:{

    flex:0.1,
    backgroundColor:'gray'
}
})


export default Task;