import {
  faUser,
  faLock,
  faFingerprint,
  faMailBulk,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "./config/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
  Alert
} from "react-native";
import { addDoc, collection } from "firebase/firestore";

const Register = ({ navigation }) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setCpass] = useState("");
  const addUserRef = collection(db, 'Users')

  // const registerUser = () => {
  //   createUserWithEmailAndPassword(auth, email, password).then(() => {
  //       const userDetails = {
  //           id:id,
  //           email:email,
  //           pass:password,
  //           email:email
  //       }

  //       addDoc(addUserRef,userDetails).then(()=>{
  //           Alert.alert("Registered successfully");
  //       }).catch((err)=>{
  //           console.log(err);
  //       })

  //       if (password === cPass) {
  //           navigation.navigate("loginAs")
  //           Alert.alert("Successfully Logged In")
  //       } else {
  //           Alert.alert('Passwords do not match ')
  //           console.log('Passwords do not match ');
  //       }

  //   }).catch((error) => {
  //       Alert.alert(error);
  //   })

    const registerUser = () => {
      createUserWithEmailAndPassword(auth,email,password).then(()=>{
      const UsersCollectionRef = collection(db, "users");
      const userDetails = {
        id:id,
        email:email,
        pass:password,
        email:email
    };
      addDoc(UsersCollectionRef, userDetails)
               }).then(()=>{ 
               Alert.alert("Successfully Registered")}),navigation.navigate("loginAs").catch((error)=> {
            console.log(error),Alert.alert("Registration unsuccessful");
        })

    }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.circle3}>
      </View>

      <View style={styles.circle4}></View>
      <View style={styles.circle5}></View>
      <View style={styles.circle6}></View>
      
      <View style={styles.empNo}>
        <FontAwesomeIcon icon={faUser} size={20} style={{ color: "#ECECEC" }} />
        <TextInput
          onChangeText={(text)=>setId(text)}
          style={{
            color: "#ECECEC",
            width: "90%",
            paddingLeft: 40,
            height: 30,
          }}
          placeholder="ID No or Employee No"
          placeholderTextColor="#ECECEC"
        />
      </View>
      <View style={[styles.email,{width: '85%',}]}>
        <FontAwesomeIcon
          icon={faMailBulk}
          size={25}
          style={{ color: "#ECECEC" }}
        />
        <TextInput
          onChangeText={(text)=>setEmail(text)}
          style={{
            color: "#ECECEC",
            width: "90%",
            paddingLeft: 40,
            height: 40,
          }}
          placeholder="Email"
          placeholderTextColor="#ECECEC"
        />
      </View>
      <View style={[styles.password,{ width: '85%',}]}>
        <FontAwesomeIcon icon={faLock} size={25} style={{ color: "#ECECEC" }} />
        <TextInput
          onChangeText={(text)=>setPassword(text)}
          style={{
            color: "#ECECEC",
            width: "90%",
            paddingLeft: 40,
            height: 40,
          }}
          placeholder="Password"
          placeholderTextColor="#ECECEC"
        />
      </View>
      <View style={[styles.cPassword,{width: '85%',}]}>
        <FontAwesomeIcon
          icon={faUnlock}
          size={25}
          style={{ color: "#ECECEC" }}
        />
        <TextInput
          onChangeText={(text)=>{setCpass(text)}}
          style={{
            color: "#ECECEC",
            width: 200,
            paddingLeft:40,
            height: 40,
          }}
          placeholder="Confirm Password"
          placeholderTextColor="#ECECEC"
        />
      </View>
      <View>
      <Text
        style={{ color: "#ECECEC", marginTop: 20 }}
        onPress={() => {navigation.navigate("nurseLogin");}}> Already have an account?</Text>
      </View>
      
      <TouchableOpacity
        style={styles.finger}
       onPress={()=>registerUser()}
      >
        <FontAwesomeIcon
          icon={faFingerprint}
          size={55}
          style={{ color: "#ECECEC" }}
        />
      </TouchableOpacity>
    </SafeAreaView>
    // <Text>uhdiughiudhg</Text>
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

  empNo: {
    marginTop:"54%",
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
  email: {
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    paddingLeft: 8,
    color: "#ECECEC",
    height: 40,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 10,
    height: 40,
  },
  cPassword: {
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    paddingLeft: 8,
    color: "#ECECEC",
    height: 40,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 10,
    height: 40,
  },
  password: {
    marginTop: 30,
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

export default Register;