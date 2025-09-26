import { KeyboardAvoidingView, Platform, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { useTheme } from "../theme/ThemeProvider";

export default function SignUpScreen() {
    const { applied } = useTheme();

    const logo = applied === "dark" ? require("../../assets/logo-dark.png") : require("../../assets/logo.png");

    return (

        <AlertNotificationRoot>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 justify-center items-center">
                <SafeAreaView>

                    <StatusBar hidden={true} />
                </SafeAreaView>
            
            </KeyboardAvoidingView>

        </AlertNotificationRoot>

    );

}