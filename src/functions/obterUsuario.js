import { decodeToken } from "react-jwt";


export default function obterUsuario() {
    const credencial = JSON.parse(localStorage.getItem("credencialUsuario") || "{}");
    if(credencial.credential){
        const responsePayload = decodeToken(credencial?.credential);
    
        return {
            id: responsePayload.sub,
            nomeCompleto: responsePayload.name,
            foto: responsePayload.picture,
            email: responsePayload.email,
        }
    }else{
        return {
            erro: "Usuario não logado!"
        }
    }
}