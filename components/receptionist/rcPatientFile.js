import { useState } from "react";
import { SafeAreaView,StyleSheet, View, Text,ScrollView, Pressable } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { CheckBox } from "react-native";
import { Button } from "react-native";
import { Picker } from "react-native-web";

const RcPatientFile = ({route}) => {
    const [agree, setAgree] = useState(false);
    const {patient}=route.params;
    let today = new Date();
    const records=[
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition:"Severe"
        },
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition:"Moderate"
        },
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition:"Mild"
        },
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition:"Mild"
        },
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition:"Mild"
        }
    ]
    console.log(agree)
    return ( 
        <SafeAreaView  style={styles.container}> 
        <View style={{alignSelf: 'stretch',height: 40, backgroundColor:"#5060F0",paddingLeft:20,alignItems:"center", marginTop:50,flexDirection:"row"}}>
            <Text style={{color:"white"}}>{patient.fullName}</Text>
            <Text style={{color:"white",marginLeft:100}}>Condition </Text>
        <Picker
          style={{
            backgroundColor:"#2827D3",
            height: 25,
            width: 70,
            color: 'white',
          }}
          onValueChange={(value) => console.log(value)}>
          <Picker.Item label="Mild" value="Mild" />
          <Picker.Item label="Moderate" value="Moderate" />
          <Picker.Item label="Severe" value="Severe" />
        </Picker>
        </View>
        <View>
        <View style={{alignSelf:"stretch",height: 200,marginTop:20,backgroundColor:"#5060F0",borderRadius:15}}>
            <Text style={{color:"white",marginLeft:10}}>New record</Text>
        <View style={{width: 339,height: 1,backgroundColor: "#FFFFFF"}} ></View>
        </View>
        <View style={{flexDirection:"row"}}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : "black"}
        />
        <Text style={{color:"white",marginLeft:10}}>Seen by receptionist</Text>
        </View>
        
          <Button
        title="Share"
        style={{width:300}}
        disabled={!agree}
        onPress={() => {
          /* Do something */
        }}
      />

        <View style={{alignSelf:"stretch",marginTop:20,backgroundColor:"#5060F0",borderRadius:15,height:400}}>
        <Text style={{color:"white",marginLeft:10}}>Patient Medical history</Text>
        <View style={{width: 339,height: 1,backgroundColor: "#FFFFFF"}} ></View>
            <ScrollView style={{marginTop:10}}>
            {records.map((record,index)=>{
                return(
                        
                        <View key={index} style={{width:300,alignSelf:"center", backgroundColor: "#2827D3",marginTop:10,padding:5,borderRadius:8}}>
                            <Text style={{color:"white"}}>Date: {today.toString()}</Text>
                           
                            <Text style={{color:"white"}}>Patient: {record.patient}</Text>
                            <Text style={{color:"white"}}>Notes: {record.syptoms}</Text>
                        </View>
            )
            })}
            </ScrollView>
            
           
        </View>
        </View>
        
        </SafeAreaView>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#2827D3",
      overflowX:"hidden",
    },
    record:{
        width: "95%",
        height: 44,
        backgroundColor:"#5060F0",
        borderRadius: 5,   
        alignSelf:"center",
        justifyContent:"center",
        marginTop:10,
        paddingLeft:10
    }
})
 
export default RcPatientFile;