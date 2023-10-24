import {addDoc , collection , serverTimestamp} from 'firebase/firestore'
import {db} from "../config/firebase-config";




export const useAddTrans = ()=>{

    const collectionRef= collection( db , "transactions");

    const addTransacton = async (
        userID , 
        description ,
        transactionAmount , 
        transactionType 
    ) =>{
        await addDoc(collectionRef , {
           userID : "", 
           description : "",
           transactionAmount : 0,
           transactionType : "",
           createdAt: serverTimestamp() ,

        })
    };
    return addTransacton;
}