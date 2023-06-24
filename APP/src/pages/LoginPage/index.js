import { View, Text, Image, TextInput, TouchableOpacity  } from "react-native";
import styles from "./styles"
import { Link } from "@react-navigation/native";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){


        const {singIn} = useContext(AuthContext)


    return(
            <View style={styles.container}> 
                    <Image source={require("../../assets/imgs/logo.png")} style={styles.imgLogo}/>
                    <TextInput
                    placeholder="Email" style={styles.input}/>
                    <TextInput placeholder="Senha" style={styles.input}/>
                    <TouchableOpacity style={styles.btnLogin} onPress={() => singIn()}  >
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.Viewlinks}>
                        <Link to={{screen:"RegisterPage"}}>Registre-se</Link>
                        <Link to={{screen:"ForgetPasswordPage"}}>Esqueceu a senha?</Link>



                    </View>



                   



            </View>


    )


}