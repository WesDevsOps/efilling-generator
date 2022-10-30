import { SafeAreaView,StyleSheet, View, Text,ScrollView, Pressable } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-web";

const RcHome = ({navigation}) => {
    const patientInfo=[
        {
            idno:"982900980219",
            fullName:"Thabo Mphela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe"

        },
        {
            idno:"002900980219",
            fullName:"Katlego Moila",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Moderate",

        },
        {
            idno:"832900980219",
            fullName:"Joseph Laka",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Severe"

        },
        {
            idno:"232902340212",
            fullName:"Thapelo Seimela",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Moderate"

        },
        {
            idno:"686590980233",
            fullName:"Kagiso Ledwaba",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Mild"

        },
        {
            idno:"012900980344",
            fullName:"John Malebana",
            address:"321 zone 1,"+
             "seshego"
             +"0751"
             ,
            Notes:"",
            condition:"Mild"

        },

    ]
    return ( 
        <SafeAreaView  style={styles.container}>
        <View style={{width:"100%",flexDirection:"row", paddingLeft:40,marginTop:60}}>
            <Text>
                Photo
            </Text>
            <View>
                <Text style={{color: "white"}}>Receptionist Name</Text>
                <Text style={{color: "white"}}>Recptionist ID no</Text>
                <Text style={{color: "white"}}>Employee no</Text>
            </View>
        </View>
        <ScrollView style={styles.patientList}>
            <TextInput style={{width: "95%", height: 32, backgroundColor: "#5060F0",borderRadius: 5,placeholderTextColor:"white",paddingLeft:10,color:"white",marginBottom:20,alignSelf:"center"}}
            placeholder="Search..."
            />
    
        {patientInfo.map((patient,index)=>(
            <TouchableOpacity style={styles.patient} key={index} onPress={()=>navigation.navigate("rcPatientFile",{patient:patient})}>
                <Text style={{color:"white"}}>{patient.fullName} {patient.idno}</Text>
            </TouchableOpacity>
        ))
        }
        </ScrollView>
        <TouchableOpacity style={{width: 246, height: 41, backgroundColor: "#5060F0",borderRadius: 5,justifyContent:"center",margin:20}}>
            <Text style={{alignSelf:"center",color:"white"}}>Create New File</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{width: 246, height: 41, backgroundColor: "#5060F0",borderRadius: 5,justifyContent:"center",marginBottom:30}}>
            <Text style={{alignSelf:"center",color:"white"}}>Close</Text>
        </TouchableOpacity>

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
    patientList:{
        width: 360,
        height: 200,
        marginTop:40,
        padding:20,
        border: "2px solid #9C9EEB",
        borderRadius: "15px",
    },
    patient:{
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
export default RcHome;