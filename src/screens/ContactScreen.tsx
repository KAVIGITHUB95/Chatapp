import { KeyboardAvoidingView, Platform, View, Image, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ContactScreen() {
    return (<SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "android" ? 100 : 100 }>
            
            <View className="p-5 items-center">

                <View>
                    <Image source={require("../../assets/logo.png")} className="h-40 w-36"/>
                </View>

                <View>
                    <Text className="text-slate-600 font-bold">
                        We use your contacts toheklp you find friends who are already on the app. Your contacts stay private.
                    </Text>
                </View>

                <View className="mt-5 w-full">

                    <Pressable className="bg-red-100 w-full justify-center items-center h-16">

                        <Text className="font-bold text-lg">Select Country</Text>
                    
                    </Pressable>
                
                </View>
            </View>
        </KeyboardAvoidingView>
    
    
    </SafeAreaView>);

}