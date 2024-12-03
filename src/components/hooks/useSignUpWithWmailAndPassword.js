import React from 'react'
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import {auth,firestore } from "../firebase/firestore";
import useShowToast from "./useShowToast";


const useSignUpWithWmailAndPassword = () => {
    const [useCreateUserWithEmailAndPassword, , loading,error]= useCreateUserWithEmailAndPassword(auth);
    const ShowToast = useShowToast();
    const loginUser = useAuthStore(state => state.login)
    

    const signup =async (inputs) => {
        if (inputs.email || !inputs.password || !inputs.username || !inputs,fullname){
            useShowToast("Error", "Please fill all the fields", "error");
            return;
        }
        
        try{
            const newUser = await useCreateUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser && error) {
                showToasr("Error","error.message", "error");
                return;
            }
            if (newUser) {
                const userDoc = {

                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullName: inputs,fullname,
                    bio:"",
                    profilePicURL:"",
                    
                };
                await setDoc(doc(firestore,"users", newuser.uid),userDoc);
                localStorage.setItem("user=info",JSO.stringify(userDoc));
                loginUser(userDoc);

            }
        } catch(error) {
            useShowToast("Error", error.message, "error");

        }
    };

    return {loading, error, signup};

}

export default useSignUpWithWmailAndPassword;