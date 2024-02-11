import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Heading } from "../components/heading"
import { SubHeading } from "../components/subHeading"
import { InputBox } from "../components/inputBox"
import { ButtonComponent } from "../components/buttonComponent"
import { BottomWarningComponent } from "../components/bottomWarning"
import axios from "axios";

export const Signin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="flex flex-col justify-center mt-[-10vh]">
        <div className="rounded-lg bg-white w-80 text-center px-4 p-2 h-max px-4">
            <Heading Label={"Sign In"}></Heading>
            <SubHeading Label={"Enter your credentials to access your account"}></SubHeading>
            <div className="pt-4">
                <InputBox onChange={(e) => { setUsername(e.target.value) }} Label={"Email"} placeholder={"Vashist@example.com"}></InputBox>
                <InputBox onChange={(e) => { setPassword(e.target.value) }} Label={"Password"} placeholder={"123456"}></InputBox>
            </div>
            <div className="pt-4">
                <ButtonComponent onClick={async () => {
                    try {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                            username,
                            password
                        }
                        );
                        localStorage.setItem("username", username)
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard");
                    } catch (error) {
                        // Handle any errors that occur during the request
                        alert("Invalid Credentials, Please Retry ");
                        return;
                    }
                }} Label={"Sign In"}></ButtonComponent>
                <BottomWarningComponent Label={"Don't have an account?"} buttontext={"Sign Up"} to={"/Signup"}></BottomWarningComponent>
            </div>
        </div>
    </div>
}