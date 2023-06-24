import { View, Text, Image, TextInput, TouchableOpacity  } from "react-native";
import styles from "./styles"
import { Link } from "@react-navigation/native";

export default function RegisterPage(){

    return(
            <View style={styles.container}> 
                    <Image source={require("../../assets/imgs/logo.png")} style={styles.imgLogo}/>
                    <TextInput
                    placeholder="Username" style={styles.input}/>
                    <TextInput
                    placeholder="Email" style={styles.input}/>
                    <TextInput placeholder="Senha" style={styles.input}/>
                    <TouchableOpacity style={styles.btnLogin}>
                        <Text style={styles.btnTxt}>Registrar</Text>
                    </TouchableOpacity>
                    <View style={styles.Viewlinks}>
                        <Link to={{screen:"LoginPage"}}>Ja sou usuario</Link>
                       



                    </View>



                   



            </View>


    )


}