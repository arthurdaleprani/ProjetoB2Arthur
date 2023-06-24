import { View, Text, Image, TextInput, TouchableOpacity  } from "react-native";
import styles from "./styles"
import { Link } from "@react-navigation/native";

export default function ForgetPasswordPage(){

    return(
            <View style={styles.container}> 
                    <Image source={require("../../assets/imgs/logo.png")} style={styles.imgLogo}/>
                    <TextInput
                    placeholder="Email" style={styles.input}/>
                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={styles.btnTxt}>Recuperar sua Senha</Text>
                    </TouchableOpacity>
                    <View style={styles.Viewlinks}>
                        <Link to={{screen:"RegisterPage"}}>Registre-se</Link>
                        <Link to={{screen:"LoginPage"}}>Login</Link>



                    </View>



                   



            </View>


    )


}