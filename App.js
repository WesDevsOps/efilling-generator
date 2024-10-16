import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import RcHome from "./components/receptionist/rcHome";
import LoginAs from "./components/loginAs";
// import Register from "./components/receptionist/register";
// import RcPatientFile from "./components/receptionist/rcPatientFile";
import NurseHome from "./components/nurse/nurseHome";
// import RcLogin from "./components/receptionist/rcLogin";
import NursePatientFile from "./components/nurse/nursePatientFile";
import Login from "./components/login";
import NurseLogin from "./components/nurse/nurseLogin";
import Register from "./components/register";
import DcLogin from "./components/doctor/dcLogin";
import DcHome from "./components/doctor/dcHome";
import docPaitentFilee from "./components/doctor/docPatientFile";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="loginAs" component={LoginAs} />  
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="nursePatientFile" component={NursePatientFile} />
        <Stack.Screen name="nurseHome" component={NurseHome} />
        <Stack.Screen name="nurseLogin" component={NurseLogin}/>
        <Stack.Screen name="dcLogin" component={DcLogin} />
        <Stack.Screen name="dcHome" component={DcHome} />
        <Stack.Screen name="docPatientFile" component={docPaitentFilee} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
