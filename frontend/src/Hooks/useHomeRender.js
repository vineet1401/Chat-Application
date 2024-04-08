import { useState } from "react";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const useHomeRender = () => {

    const navigate = useNavigate();
    const renderUser = async (id) => {
        
        try {
            const res = await fetch(`/api/user/${id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const x = await res.json();
            return x;

        } catch (err) {
            navigate("/login");
            toast.error("Internal Server Error");
        }
    }
    return { renderUser };
}

export default useHomeRender
