import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View,Text,Image } from "react-native";

export function HomeScreen  () {

    const navigation = useNavigation();
    const FormScreen = () => {
        navigation.navigate('Form')
    }

    return(
        <View style={styles.container}>
            <Text></Text>
            <Text style={styles.headtxt}>‧₊˚✧Welcome To Resume App ✧˚₊‧</Text>
            <Image 
            source = {require('../ResumeForm/Images/ResumeLogo.png')}
            style={styles.img}
            />
            <TouchableOpacity
            style={styles.btn}
            onPress={FormScreen}
            >
                <Text style={styles.btntxt}>Create Resume ≫</Text>
            </TouchableOpacity>
            <Text style={{top:200,fontSize:16,textShadowColor:'#db46bd',textShadowRadius:3}}>Strive not to be a success, but rather to be of value</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    img:{
        width:200,
        height:180,
        top:200,
        left:10
    },
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    headtxt:{
        top:170,
        fontSize:20,
        color:'#56a3f5',
        textShadowColor:'black',
        textShadowRadius:2
    },
    btn:{
        top:300,
        borderWidth:1,
        width:200,
        height:40,
        alignItems:"center",
        backgroundColor:'#5ca2ed',
        borderColor:'white'
    },
    btntxt:{
        paddingTop:8,
        color:'white'
    }
})

