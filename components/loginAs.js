import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";

const LoginAs = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.circle3}></View>

      <View style={styles.circle4}></View>
      <View style={styles.circle5}></View>
      <View style={styles.circle6}></View>

      <TouchableOpacity style={styles.circle7}>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            // fontWeight: 600,
            marginTop: 23,
          }}
        >
           Close
         </Text>
       </TouchableOpacity>

       {/* <TouchableOpacity
        style={styles.recep}
        onPress={() => {
          navigation.navigate("rcLogin");
        }}
      >
        <Text style={{ color: "#ECECEC", fontSize: 18 }}>
          Receptionist
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.nurse}  onPress={() => {navigation.navigate("nurseLogin")}}>
        <Text style={{ color: "#ECECEC", fontSize: 18 }}>
          Nurse
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.doctor} onPress={() => {navigation.navigate("dcLogin")}}>
        <Text style={{ color: "#ECECEC", fontSize: 20 }}>
          Doctor
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2827D3",
    overflow: "hidden",
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

  circle7: {
    position: "absolute",
    width: 200,
    height: 200,
    left: 85,
    bottom: -130,
    backgroundColor: "#5060F0",
    borderRadius: 300,
    opacity:0.35,
    alignItems: "center",
    justifyContent: "center",
  },
  recep: {
    marginTop: 380,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    width: "85%",
    color: "#ECECEC",
    height: 40,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#3939d7",
    borderRadius: 10,
    height: 50,
  },
  nurse: {
    marginTop:360,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    width: "85%",
    justifyContent:"center",
    color: "#ECECEC",
    height: 40,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 10,
    height: 50,
  },
  doctor: {
    marginTop: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    width: "85%",
    justifyContent:"center",
    color: "#ECECEC",
    height: 40,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 10,
    height: 50,
  },
});
export default LoginAs;
