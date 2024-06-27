

import { ROSE_API } from '@env';
import CryptoJS from 'crypto-js';

interface IRoseLogin{
    id: string
    pw: string
}



export const postRoseLogin = async(props:IRoseLogin) => {
    const { id, pw } = props
    
    const hash = CryptoJS.SHA1(pw).toString();
    
    const postBody = {
        "email": id,
        "password": hash,
        "roseId": null
    };

    try{
        
        const result = await fetch(`${ROSE_API}/member/member/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postBody),
        }).then(res => {
            return res.json()
        })
    
        return result

    }catch(error){
        console.log(error)
    }


}