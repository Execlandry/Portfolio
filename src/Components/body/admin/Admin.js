import React from 'react'
import Separator from '../../common/separator/Separator'
import './admin.css'
// import Signup from '../admin/Pages/signup/Signup'
import Signin from './Pages/signin/Signin'
// import Signup from './Pages/signup/Signup'
const Admin = () => {
    return (
        <div className="admin">
        <div className="admin-sep">
            <Separator />
        </div>

            <label htmlFor="" className="section-title">
                Admin</label>
            <div className="admin-section-body">
                <Signin/>
            </div>
            {/* <div><Signup/></div> */}
        </div>
    )
}

export default Admin
