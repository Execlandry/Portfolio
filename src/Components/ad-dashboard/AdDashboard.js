import React, { useEffect,useState } from 'react'
// import { useNavigate } from 'react-router'
import AdNavbar from '../ad-dashboard/ad-navbar/AdNavbar'
import Home2 from '../home/Home2'

const AdDashboard = () => {
    const [userData, setUserData] = useState({})
    const [adminLogin, setAdminLogin] = useState(false)
    // const navigate = useNavigate();
    const callAdDashboard = async() => {
        try {
            const res = await fetch('/dashboard',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                "Content-Type":"application/json"},
                credentials:"include"
            })
            setAdminLogin(true)
            adminLogin && <Home2 adminLogin={adminLogin} setAdminLogin={setAdminLogin}/>
           
            const data = await res.json();
            setUserData(data);

            if(!res.status===200){
                const error = new Error(res.error)
                throw error;
            }
            
        } catch (error) {
            console.log(error);
            // navigate('/')
            
        }
    }
    useEffect(() => {
        callAdDashboard();
        
    },)
    return (
        <>
        <AdNavbar/>
        <form method="GET">
        <div>
        <h1>hi {userData.name}</h1>
        <p></p>
        </div>

        </form>
    </>
    )
}

export default AdDashboard
