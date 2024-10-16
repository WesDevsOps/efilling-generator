import {
    faUser,
    faLock,
    faFingerprint,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
  
  import { useState } from "react";
  import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
  } from "react-native";
  import logo from '../images/real.png'
  import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
  
  const NurseLogin = ({ navigation }) => {
    const [id, setId] = useState("");
    const [pass, setPass] = useState("Password");

    const NurseLogin = () => { 
      signInWithEmailAndPassword(auth,id,pass).then(()=>{
        if (id !== "" && pass !== ""){
          navigation.navigate("nurseHome");
          Alert.alert("Login Successful")
        }else{
          Alert.alert("Inputs can not be empty"),
          console.log("Inputs can not be empty");
        }
  
      }).catch((error)=>{
        console.log(error),Alert.alert("No existing account for", id);
      })
    
    }
    return (
      <SafeAreaView style={styles.container}>
            <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.circle3}></View>

      <View style={styles.circle4}></View>
      <View style={styles.circle5}></View>
      <View style={styles.circle6}></View>
        <View>
          <Image source={logo} style={{width:250,height:200,marginTop:'30%'}}/>
        </View>
        <View style={styles.empNo}>
          <FontAwesomeIcon icon={faUser} size={25} style={{ color: "#ECECEC" }} />
          <TextInput
            onChangeText={(text)=>setId(text)}
            style={{
              color: "#ECECEC",
              width: "90%",
              paddingLeft: 50,
              height: 40,
            }}
            placeholder="ID No or Employee No"
            placeholderTextColor="#ECECEC"
          />
        </View>
        <View style={styles.password}>
          <FontAwesomeIcon icon={faLock} size={25} style={{ color: "#ECECEC" }} />
          <TextInput
            onChangeText={(text)=>setPass(text)}
            style={{
              color: "#ECECEC",
              width: "90%",
              paddingLeft: 110,
              height: 50,
            }}
            placeholder="Password"
            placeholderTextColor="#ECECEC"
          />
        </View>
        <Text style={{ color: "#ECECEC", marginTop: 5 }} onPress={() => { navigation.navigate("register")}}>
          Dont have an account?
        </Text>
        <Text style={{ color: "#ECECEC", marginTop: 5 }} onPress={() => { navigation.navigate("forgotPassword")}}>Forgot password?</Text>
  
        <TouchableOpacity
          style={styles.finger}
          onPress={NurseLogin}
        >
          <FontAwesomeIcon
            icon={faFingerprint}
            size={40}
            style={{ color: "#ECECEC" }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#2827D3",
      overflowX: "hidden",
    },
    circle1: {
      position: "absolute",
      width: 408,
      height: 408,
      right: -80,
      top: -90,
      opacity: 0.25,
      backgroundColor: "#5060F0",
      borderRadius: 300,
    },
    circle2: {
      position: "absolute",
      width: 310,
      height: 310,
      right: -30,
      top: -50,
      opacity: 0.35,
      backgroundColor: "#5060F0",
      borderRadius: 300,
    },
    circle3: {
      position: "absolute",
      width: 200,
      height: 200,
      right: 25,
      top: 4,
      backgroundColor: "#5060F0",
      borderRadius: 300,
      alignItems: "center",
      justifyContent: "center",
    },
    circle4: {
      position: "absolute",
      width: 308,
      height: 308,
      left: -143,
      bottom: 90,
      opacity: 0.25,
      backgroundColor: "#5060F0",
      borderRadius: 300,
    },
    circle5: {
      position: "absolute",
      width: 200,
      height: 200,
      left: -90,
      bottom: 145,
      backgroundColor: "#5060F0",
      borderRadius: 300,
      opacity: 0.35,
      alignItems: "center",
      justifyContent: "center",
    },
    circle6: {
      position: "absolute",
      width: 110,
      height: 110,
      left: -53,
      bottom: 188,
      backgroundColor: "#5060F0",
      borderRadius: 300,
      opacity:0.35,
      alignItems: "center",
      justifyContent: "center",
    },
    logIn: {
      color: "white",
   
    },
    empNo: {
      marginTop: 50,
      borderBottomWidth: 2,
      borderBottomColor: "#ECECEC",
      width: "85%",
      paddingLeft: 8,
      color: "#ECECEC",
      height: 40,
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      backgroundColor: "#3939d7",
      borderRadius: 7,
    },
    password: {
      marginTop: 15,
      borderBottomWidth: 2,
      borderBottomColor: "#ECECEC",
      width: "85%",
      paddingLeft: 8,
      color: "#ECECEC",
      height: 40,
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      backgroundColor: "#3939d7",
      borderRadius: 7,
    
    },
    finger: {
      width: 55,
      height: 80,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#ECECEC",
      borderRadius: 8,
      backgroundColor: "#3939d7",
      marginTop: 10,
      marginLeft: 255,
    },
  });
  
  export default NurseLogin;