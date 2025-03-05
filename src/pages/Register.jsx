import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { auth } from "../config/fireStore.config";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import useForm from "../customHooks/useForm";
import { useToastContext } from "../contexts/ToastContext";


const Register = () => {

    const { formData, handleFormChange, clearInputs } = useForm({ name: '', email: '', password: '' })
    const { name, email, password } = formData;
    const { setToastVis } = useToastContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            console.log("before registering:", auth);

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("New user Created:", userCredential.user);

                })
                .catch((err) => {
                    console.log("err code: ", err.code, " err msg:", err.message);

                })

            console.log("about auth from firebase", auth);

            sendEmailVerification(auth.currentUser)

            setToastVis({

                vis: true,
                msg: 'Registration Successfully!'
            })


            clearInputs();

        } catch (error) {
            console.log("couldn't verify your email id make sure the email ID is correct.");

        }


    }



    return (
        <Card color="transparent" shadow={false} className="flex justify-center items-center m-2">
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                    </Typography>
                    <Input
                        size="lg"
                        id="name"
                        value={name}
                        onChange={handleFormChange}
                        required
                        placeholder="name lastName"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
                        required
                        size="lg"
                        id="email"
                        value={email}
                        onChange={handleFormChange}
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input
                        required
                        type="password"
                        size="lg"
                        id="password"
                        value={password}
                        onChange={handleFormChange}
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <Checkbox
                    label={
                        <Typography
                            required
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                                href="#"
                                className="font-medium transition-colors hover:text-gray-900"
                            >
                                &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button type='submit' className="mt-6" fullWidth>
                    Sign up
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
}

export default Register;