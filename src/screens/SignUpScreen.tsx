import { KeyboardAvoidingView, Platform, StatusBar, Image, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { ALERT_TYPE, AlertNotificationRoot, Toast } from "react-native-alert-notification";
import { useTheme } from "../theme/ThemeProvider";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStack } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { useUserRegistration } from "../components/UserContext";
import { validateFirstName, validateLastName } from "../../util/Validation";

type SignUpProps = NativeStackNavigationProp<RootStack, "SignUpScreen">;

export default function SignUpScreen() {
    const { applied } = useTheme();


    const logo = applied === "dark" ? require("../../assets/logo-dark.png") : require("../../assets/logo.png");
    const { userData, setUserData } = useUserRegistration();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigation = useNavigation<SignUpProps>();

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 100} className="flex-1 justify-center items-center dark:bg-slate-800">
            <SafeAreaView className="flex justify-center items-center p-5">
                <StatusBar hidden={true} />
                <Image source={logo} className="h-60 w-60" />

                <View className="w-full justify-start items-starts">
                    <Text className="font-bold text-slate-500 dark:text-slate-100">

                        Create your account and start the conversation TODAY

                    </Text>
                </View>
                <View className="self-stretch">

                    <View className="w-full my-3">
                        <FloatingLabelInput label={"Enter Your First Name"} maxLength={200} className=" text-slate-500 dark:text-slate-100 text-lg" value={userData.firstName} onChangeText={(text) => { setUserData((previous) => ({ ...previous, firstName: text, })); }} />

                    </View>

                    <View className="w-full my-3">
                        <FloatingLabelInput label={"Enter Your Last Name"} maxLength={200} className=" text-slate-500 dark:text-slate-100 text-lg" value={userData.lastName} onChangeText={(text) => { setUserData((previous) => ({ ...previous, lastName: text, })); }} />
                    </View>

                </View>
            </SafeAreaView>

            <View className="w-full p-5">


                <Pressable className="bg-green-600 h-14 justify-center items-center rounded-xl" onPress={() => {

                    let validFirstName = validateFirstName(userData.firstName);

                    let validLastName = validateLastName(userData.lastName);
                    if (validFirstName) {
                        Toast.show({ type: ALERT_TYPE.WARNING, title: "Warning", textBody: validFirstName, });
                    } else if (validLastName) {
                        Toast.show({ type: ALERT_TYPE.WARNING, title: "Warning", textBody: validLastName, });

                    } else {
                        navigation.replace("ContactScreen");

                    }

                }}>
                    <Text className="text-slate-100 dark:text-slate-100 font-bold text-2xl">

                        Next
                    </Text>
                </Pressable>

            </View>
        </KeyboardAvoidingView>
    );
}