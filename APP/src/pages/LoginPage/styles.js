import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
container:{
flex: 1,
alignItems:"center",
justifyContent:"center",
backgroundColor:"red"


},

imgLogo:{
height:"150px",
width:"150px",
marginBottom:15

},
input:{
border:'1px solid black',
width:"50%",
height:"30",
marginBottom: 5,
padding: 10,
borderRadius:15
},

btnLogin: {
border: '2px solid black',
width:"45%",
height:35,
alignItems:"center",
justifyContent:"center",
backgroundColor:"black",
marginBottom:5,
borderRadius:15

},
btnTxt:{
color: "white"

},
Viewlinks:{
marginTop:10,
flexDirection: "row",
width:'65%',
justifyContent:"space-between"

}


})
export default styles;