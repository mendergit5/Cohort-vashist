import { Heading } from "../components/heading"
import { SubHeading } from "../components/subHeading"
import { InputBox } from "../components/inputBox"
import { ButtonComponent } from "../components/buttonComponent"
import { BottomWarningComponent } from "../components/bottomWarning"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-col justify-center ">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading Label={"Sign up"}></Heading>
                    <SubHeading Label={"Enter your information to create an account"}></SubHeading>
                    <div className="pt-6">
                        <InputBox onChange={(e) => { setFirstName(e.target.value) }} Label={"First Name"} placeholder={"Vashist"}></InputBox>
                        <InputBox onChange={(e) => { setLastName(e.target.value) }} Label={"Last Name"} placeholder={"Vyas"}></InputBox>
                        <InputBox onChange={(e) => { setUsername(e.target.value) }} Label={"Email"} placeholder={"Vashist@gmail.com"}></InputBox>
                        <InputBox onChange={(e) => { setPassword(e.target.value) }} Label={"Password"} placeholder={"123456"}></InputBox>
                    </div>
                    <div className="pt-4">
                        <ButtonComponent onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                firstName,
                                lastName,
                                password
                            });
                            localStorage.setItem("token", response.data.token)
                            navigate("/dashboard")
                        }} Label={"Sign up"}></ButtonComponent>
                        <BottomWarningComponent Label={"Already have an account?"} buttontext={"Sign in"} to={"/signin"}></BottomWarningComponent>
                    </div>
                </div>
            </div>
        </>
    )
}

