import { createContext, useContext, useState } from "react";

 const AuthContext = createContext();

    export  function useAuth(){

            const context = useContext(AuthContext);
            return context;



    }



    export function AuthProvider({children}){
        
            const [logado, setLogado] = useState(false);
            const [loading, setLoanding] = useState(false);

        function singIn(){
                return new Promise(resolve => {
                    setLoanding(true)
                    setTimeout (function(){setLogado(true);
                    setLoanding(false)
                }, 2000)})
                    
        }
        
        
        return(
                <AuthContext.Provider value={{logado, singIn}}>

                    {children}

                </AuthContext.Provider>

        );
        }

 export default AuthContext;