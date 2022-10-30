import { SafeAreaView,StyleSheet, View, Text } from "react-native";

const DcHome = () => {
    return ( 
        <SafeAreaView  style={styles.container}>
        <View>
            <Text>
                Doctor Home
            </Text>
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
})
export default DcHome;