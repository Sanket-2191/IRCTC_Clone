
import React from 'react'
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

const Login = () => {
    return (
        <Card className="w-96 flex justify-center items-center m-5">
            <CardHeader

                className="mb-4 grid h-15 place-items-center"
            >
                <Typography variant="h6" color="black" className='p-4 box-content '>
                    Log Into your Account
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                <Input label="Email" size="lg" required />
                <Input label="Password" size="lg" required />
                <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth>
                    Log In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                    Don&apos;t have an account?
                    <Typography
                        as="a"
                        href="#signup"
                        variant="small"
                        color="blue-gray"
                        className="ml-1 font-bold"
                    >
                        Sign up
                    </Typography>
                </Typography>
            </CardFooter>
        </Card>
    )
}

export default Login
