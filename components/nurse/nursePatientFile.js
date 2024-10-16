import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView, Pressable, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native";
import React from "react";
import { addDoc, collection, getDocs,serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase.js';
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";


const NursePatientFile = ({ navigation,route }) => {
    const [agree, setAgree] = useState(false);
    const [condition, setCondition]=React.useState("");
    const [nurseNotes,setNurseNotes]=React.useState("");
    const { patient } = route.params;
    let today = new Date();

    const [data, setData] = React.useState([])
    const patientRef = collection(db, "records")


    const getPatientRef = async () => {
        const data = await getDocs(patientRef)

        console.log(data.docs.map((results) => (results.data())))
        setData(data.docs.map((results) => ({ ...results.data(), id: results.id })));
    }
    useEffect(() => {
        getPatientRef()

    }, []);
    
    const AddRecord = () =>{

        const Patient ={
            idno:patient.idno,
            fullName:patient.fullName,
            phoneNumber:patient.phoneNumber,
            physicalAddress:patient.physicalAddress,
            nextOfKin:patient.nextOfKin,
            notes:"Receptionist: "+patient.notes+", Nurse: "+nurseNotes,
            condition:condition,
            date:today.toString().substring(0,15)
        };
    
        addDoc(patientRef,Patient).then(()=>{
            console.log('patient added');
            Alert.alert("successfully added");
        }).catch((err)=> {
            console.log(err);
            Alert.alert('Something went wrong')
          })
        }


    const [nurseAdd, setNurseAdd] = React.useState(false)
    console.log(agree)
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignSelf: 'stretch', height: 40, backgroundColor: "#5060F0", paddingLeft: 20, alignItems: "center", marginTop: 50, flexDirection: "row" }}>
                <Text style={{ color: "white" }}>{patient.fullName}</Text>
                <Text style={{ color: "white", marginLeft: 100 }}>Condition </Text>
                <Picker
                    style={{
                        backgroundColor: "#2827D3",
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
                <View style={styles.todayRecords}>
                    <Text style={{ color: "white", marginLeft: 10 }}>Today's records</Text>
                    <View style={{ width: 339, height: 1, backgroundColor: "#FFFFFF" }} ></View>

                    <ScrollView>
                        {data.map((record, i) => {
                             if(record.fullName==patient.fullName){
                                return(
                                    record.date === today.toString().substring(0, 15) ? (

                                        <View key={i} style={{ width: 300, alignSelf: "center", backgroundColor: "#5060F0", marginTop: 10, padding: 5, borderRadius: 8 }}>
                                            <Text style={{ color: "white" }}>Date: {record.date}</Text>
                                            <Text style={{ color: "white" }}>Patient: {record.fullName}</Text>
                                            <Text style={{ color: "white" }}>Notes: {record.notes}</Text>
                                            {nurseAdd === false ? (
                                                <TouchableOpacity style={styles.btn} onPress={() => setNurseAdd(true)}>
                                                    <Text>Add notes</Text></TouchableOpacity>
                                            ) : (
                                                <View>
                                                  <TextInput placeholder="Notes by nurse"  
                                                    onChangeText={(text)=>setNurseNotes(text)}
                                                    style={{ width: "98%", height: 42, backgroundColor: "#2827D3", borderRadius: 5, paddingLeft: 10, color: "white", margin: 10, alignSelf: "center" }}>
                                                    </TextInput>
                                                    <TouchableOpacity style={styles.btn}>
                                                        <Text>Save</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )}
        
                                        </View>
                                    ) : (
                                        <Text style={{ color: "white" }}></Text>
                                    )
                                )
                             }                            
                            })
                        }
                    </ScrollView>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Checkbox
                        value={agree}
                        onValueChange={() => setAgree(!agree)}
                        color={agree ? "#4630EB" : "black"}
                        style={{marginLeft:15, marginBottom:15}}
                    />
                    <Text style={{ color: "white", marginLeft: 10 }}>Seen by nurse</Text>
                </View>

                <Button
                    title="Share"
                    style={{ width: 300 }}
                    disabled={!agree}
                    onPress={() =>AddRecord()}
                />


                <View style={{ alignSelf: "stretch", marginTop: 20, backgroundColor: "#5060F0", borderRadius: 15, height: 300, marginBottom: 30 }}>
                    <Text style={{ color: "white", marginLeft: 10 }}>Patient Medical history</Text>
                    <View style={{ width: 339, height: 1, backgroundColor: "#FFFFFF" }} ></View>
                    <ScrollView style={{ marginTop: 10 }}>
                        {data.map((record, index) => {
                           if(record.fullName==patient.fullName)
                           {
                            return (
                                <View key={index} style={{ width: 300, alignSelf: "center", backgroundColor: "#2827D3", marginTop: 10, padding: 5, borderRadius: 8 }}>
                                    <Text style={{ color: "white" }}>Date: {record.date}</Text>
                                    <Text style={{ color: "white" }}>Patient: {record.fullName}</Text>
                                    <Text style={{ color: "white" }}>Notes: {record.notes}</Text>
                                </View>
                            )
                           }
                          
                        })}
                    </ScrollView>

                </View>
            </View>

            <TouchableOpacity style={{ width: 246, height: 41, backgroundColor: "#5060F0", borderRadius: 5, justifyContent: "center", marginBottom: 20 }} onPress={() => navigation.navigate("nurseHome")}>
                <Text style={{ alignSelf: "center", color: "white" }}>Close</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#2827D3",
        overflowX: "hidden",
    },
    record: {
        width: "95%",
        height: 30,
        backgroundColor: "#5060F0",
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 10,
        paddingLeft: 10
    },
    btn:
    {
        color: "white",
        width: 200,
        height: 30,
        backgroundColor: "#189bcc"
        , alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        margin: 10
    },
    todayRecords: {

        marginBottom: 10,
        padding: 20,
        alignSelf: "stretch",
        height: 180,
        marginTop: 20,
        // backgroundColor:"#5060F0",
        borderRadius: 15,
        border: "2px solid #9C9EEB",
    }
})

export default NursePatientFile;