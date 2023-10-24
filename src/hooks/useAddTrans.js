import {addDoc , collection , serverTimestamp} from 'firebase/firestore'
import {db} from "../config/firebase-config";
import {useGetUser} from "../hooks/useGetUser"



export const useAddTrans = ()=>{

    const collectionRef= collection( db , "transactions");
    const userID = useGetUser().userID;
    
    const addTransacton = async (
        {description ,
        transactionAmount , 
        transactionType }
    ) =>{
        await addDoc(collectionRef , {
           userID, 
           description,
           transactionAmount ,
           transactionType ,
           createdAt: serverTimestamp() ,

        })
    };
    return addTransacton;
}