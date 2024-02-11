import { useEffect } from "react";
import { InputBox } from "../components/inputBox"
import { Heading } from "../components/heading"
import { ButtonComponent } from "../components/buttonComponent"
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Appbarcomponent({ Title, Label }) {
    return (
        <div className="flex p-6 justify-between border-b rounded-md border-slate-200 mt-2">
            <div className="font-extrabold text-xl">{Title}</div>
            <div className="text-lg font-medium">Hello, {Label}</div>
        </div>
    )
}

export function BalanceComponent({ Label, Balance }) {
    return (
        <div className="flex p-6 font-bold text-lg">
            <div>{Label}</div>
            <div className="pl-6">₹{Balance}</div>
        </div>
    )
}

// export function SearchBarComponent(){
//     return(
//         <input className="p-2" />
//     )
// }

export function UserComponent({ Label }) {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const currentUserID = localStorage.getItem("username");

    const filterUsers = () => {

    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/user/bulk");

                setUsers(response.data.user);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, [])

    const handleSearch = async (e) => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + e.target.value);
            setUsers(response.data.user);
        } catch (error) {
            console.error("Error searching users:", error);
        }
    };

    const handleButton = (userId,firstname) => {
        navigate("/sendmoney" , { state: { userId, firstname } })
    }

    return (
        <div className="p-6 pt-0">
            <Heading Label={Label}></Heading>
            <div className="pt-2">
                <InputBox onChange={handleSearch} placeholder={"Search users..."}></InputBox>
            </div>
            <div className="pt-2"></div>
            {users.map(user => (
                user.username !== currentUserID && (
                <div key={user._id} className="flex justify-between pt-4 ">
                    <div className="text-lg font-semibold">{user.firstname} {user.lastname}</div>
                    <ButtonComponent onClick={() => handleButton(user._id,user.firstname)} Label={"Send Money"}></ButtonComponent>
                </div>
                )
            ))}
        </div>
    )
}

export function Dashboard() {
    const [Balance,setBalance] = useState([]);
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchBalance();
    },[])
    return (
        <>
            <div className="bg-white min-w-full min-h-screen">
                <Appbarcomponent Title={"Paytm App"} Label={localStorage.getItem("username")}></Appbarcomponent>
                <BalanceComponent Label={"Your Balance"} Balance={Balance}></BalanceComponent>
                <UserComponent Label={"Friends"}></UserComponent>
            </div>
        </>
    )
}

