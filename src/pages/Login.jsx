
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/fireStore.config';
import useForm from '../customHooks/useForm';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';
import { useToastContext } from '../contexts/ToastContext';



const Login = () => {

    const { formData, handleFormChange, clearInputs } = useForm({ email: '', password: '' });
    const { email, password } = formData;
    const { setLoggedIn } = useAuthContext();
    const navigate = useNavigate();
    const { setToastVis } = useToastContext();




    const handleSubmit = (e) => {
        e.preventDefault();
        // auth.currentUser.emailVerified  checks if the email used for registration is verified.
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("signedIn with: ", auth);
                setLoggedIn(true);

                setToastVis({
                    vis: true,
                    msg: 'LoggedIn Successfully!'
                });

                navigate('/')


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log("could'nt signIn because: ", { errorCode, errorMessage });

            });

        clearInputs();
    }


    return (
        <>
            <Card className="w-96 flex justify-center items-center m-5">
                <CardHeader

                    className="mb-4 grid h-15 place-items-center"
                >
                    <Typography variant="h6" color="black" className='p-4 box-content '>
                        Log Into your Account
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input
                        id='email'
                        value={email}
                        onChange={handleFormChange}
                        label="Email" size="lg" required />
                    <Input
                        id='password'
                        value={password}
                        onChange={handleFormChange}
                        label="Password" size="lg" required type='password' />
                    <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button onClick={handleSubmit} variant="gradient" fullWidth href="/">
                        Log In
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Don&apos;t have an account?
                        <Typography
                            as="a"
                            href="/signup"
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                        >
                            Sign up
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </>

    )
}

export default Login

