import React from 'react'
import Separator from '../../common/separator/Separator'
import './admin.css'
import Signup from '../admin/Pages/signup/Signup'
const Admin = () => {
    return (
        <div className="admin">
            <Separator />

            <label htmlFor="" className="section-title">
                Admin</label>
            <div className="admin-section-body">
                <Signup/>
            </div>
        </div>
    )
}

export default Admin
