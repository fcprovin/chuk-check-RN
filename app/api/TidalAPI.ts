import { TIDAL_API, TIDAL_AUTH_API } from "@env";
import userSlice from "../redux/slices/user";

interface IHeader{
    "Content-Type": string
    "Authorization"?:string
}

let Headers:IHeader = {
    "Content-Type" : "application/x-www-form-urlencoded"
}



export const postTidalLogin = async(code:string, dispatch:any, saveLocalData:any) => {
    console.log("타이달 로그인 code get >>>", code)
    const params = {
        "client_id" : "nsxTmgMXYOC9T6Vp",
        "client_secret": "ST*e!UJnST5%2N'9",
        "grant_type" : "authorization_code",
        "redirect_uri" : "https://beta.roseaudio.kr/service/application/callback",
        "restrictSignup" : "true",
        "code_verifier" : "rose",
        "scope" : "r_usr",
        "code" : code
    }

    const query = new URLSearchParams(params).toString();

    
    try{
        const result = await fetch(`${TIDAL_AUTH_API}/oauth2/token?${query}`,{
            method: "POST",
            headers: {...Headers}
        }).then( res => {
            return res.json()
        }).catch( error =>{
            console.log(error)
            
        })

       

        dispatch(userSlice.actions.setTidal(result))
        saveLocalData(result, "tidalUser")
        getTidalSession(result.access_token, dispatch, saveLocalData)

    }catch(error){
        console.log(error)
    }
}

const getTidalSession = async(token:string, dispatch:any, saveLocalData:any) => {
    Headers['Authorization'] = `Bearer ${token}`
    console.log("session Header", Headers)

    try{
        const result = await fetch(`${TIDAL_API}/sessions` ,{
            method: "GET",
            headers: {...Headers}
        }).then(res => {return res.json()})

        dispatch(userSlice.actions.setTidalSession(result))
        saveLocalData(result, "tidalSession")
    }catch(error){

    }
}