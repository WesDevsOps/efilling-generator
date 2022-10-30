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
} from "react-native";

const Login = ({ navigation }) => {
  const [id, setId] = useState("ID No or Employee No");
  const [pass, setPass] = useState("Password");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.circle3}>
        <Text style={styles.logIn}>Log-In</Text>
      </View>
      <View style={styles.empNo}>
        <FontAwesomeIcon icon={faUser} size={25} style={{ color: "#ECECEC" }} />
        <TextInput
          onChangeText={setId}
          style={{
            color: "#ECECEC",
            width: "90%",
            paddingLeft: 70,
            height: 40,
          }}
          placeholder={id}
          placeholderTextColor="#ECECEC"
        />
      </View>
      <View style={styles.password}>
        <FontAwesomeIcon icon={faLock} size={25} style={{ color: "#ECECEC" }} />
        <TextInput
          onChangeText={setPass}
          style={{
            color: "#ECECEC",
            width: "90%",
            paddingLeft: 110,
            height: 40,
          }}
          placeholder={pass}
          placeholderTextColor="#ECECEC"
        />
      </View>
      <Text style={{ color: "#ECECEC", marginTop: 20 }}onPress={()=>{(navigation.navigate('register'))}}>
        Dont have an account?
      </Text>
      <Text style={{ color: "#ECECEC", marginTop: 15 }} >Forgot password?</Text>

      <TouchableOpacity
        style={styles.finger}
        onPress={() => {
          navigation.navigate("rcHome");
        }}
      >
        <FontAwesomeIcon
          icon={faFingerprint}
          size={55}
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
    width: 508,
    height: 508,
    left: -50,
    top: -90,
    opacity: "25%",
    backgroundColor: "#5060F0",
    borderRadius: "50%",
  },
  circle2: {
    position: "absolute",
    width: 410,
    height: 410,
    left: 0,
    top: -50,
    opacity: "35%",
    backgroundColor: "#5060F0",
    borderRadius: "50%",
  },
  circle3: {
    position: "absolute",
    width: 300,
    height: 300,
    left: 55,
    top: 4,
    backgroundColor: "#5060F0",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  logIn: {
    color: "white",
    fontSize: 24,
    fontWeight: 700,
  },
  empNo: {
    marginTop: 500,
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
    borderRadius: 10,
    height: 50,
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
    borderRadius: 10,
    height: 50,
  },
  finger: {
    width: 90,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    // border:" #ECECEC",
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 8,
    backgroundColor: "#3939d7",
    marginTop: 20,
    marginLeft: 200,
  },
});

export default Login;
