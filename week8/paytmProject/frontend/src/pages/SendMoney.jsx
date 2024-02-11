import { useLocation, useNavigate } from "react-router-dom";
import { Heading } from "../components/heading";
import { SubHeading } from "../components/subHeading";
import { InputBox } from "../components/inputBox";
import { ButtonComponent } from "../components/buttonComponent";
import axios from "axios";
import { useState } from "react";


export function SendMoney() {
    const { state } = useLocation();
    const [amount, setAmount] = useState("");
    const userId = state.userId;
    const firstName = state.firstname;
    const navigate = useNavigate();
    
    const handleButton = async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer",
            {
                to: userId,
                amount: amount
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response);
            console.log(userId);
            console.log(token);
            console.log(amount);
            if(response.status == 200)
            {    alert("transaction successfull")
                    navigate("/dashboard")
                    return;
            }
        } catch (error) {
            console.error("Error searching users:", error);
        }
    };

    return (
        <>
            {/* <div>Hello {userId} {firstName}</div> */}
            <div className="flex justify-center flex-col">
                <div className="rounded-lg bg-white w-96 p-2 h-max px-4">
                    <div className="text-center">
                        <Heading Label={"Send Money"}></Heading>
                    </div>
                    <div className="p-2 mt-16 ">
                        <div className="text-left text-xl font-semibold"> {firstName}</div>
                        <SubHeading Label={"Amount (in Rs)"}></SubHeading>
                        <InputBox onChange={(e) => { setAmount(e.target.value) }} placeholder={"Enter Amount"}></InputBox>
                        <div className="pt-4">
                            <ButtonComponent onClick={handleButton} Label={"Initiate Transfer"}></ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

