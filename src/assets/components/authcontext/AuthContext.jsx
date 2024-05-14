import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../../firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { QueryClient, QueryClientProvider  } from "@tanstack/react-query";
import useAxiousSecure from "../hooks/useAxiousSecure";


const queryClient = new QueryClient();
export const AuthCon = createContext();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const axioussecure = useAxiousSecure();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const usrEmail = currentUser?.email || user?.email;
            const loggedUser = { email: usrEmail }
            setUser(currentUser);
            setLoader(false);
            if (currentUser) {
                axioussecure.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            } else {
                axioussecure.post('/logout', loggedUser)
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const createUser = (email, password) => {
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoader(false)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoader(false)
        return signOut(auth)
    }

    const providergoogle = new GoogleAuthProvider();
    const googlelogin = () => {
        return signInWithPopup(auth, providergoogle)
    }


    const providergit = new GithubAuthProvider();
    const gitlogin = () => {
        setLoader(true)
        return signInWithPopup(auth, providergit)
    }

    const name = "sami"

    const authinfo = { user, name, setUser, loader, createUser, gitlogin, googlelogin, logOut, signIn }
    return (
        <QueryClientProvider client={queryClient}>
            <AuthCon.Provider value={authinfo}>
                {children}
            </AuthCon.Provider>
        </QueryClientProvider>

    );
};

export default AuthContext;