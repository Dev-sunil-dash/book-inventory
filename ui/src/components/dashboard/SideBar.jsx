import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiBookOpen, HiChartPie, HiOutlineCloudUpload, HiOutlineLogin, HiOutlineLogout, HiShoppingBag, HiUser, HiViewBoards } from "react-icons/hi";
import AuthContext from '../../context/AuthContext';


const SideBar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    return (
        <Sidebar aria-label="Sidebar with content separator example" className='min-h-screen'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/upload-book" icon={HiOutlineCloudUpload}>
                        Upload Book
                    </Sidebar.Item>
                    <Sidebar.Item href="/admin/dashboard/manage-book" icon={HiBookOpen}>
                        Manage Books
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item href="/login"  onClick={signOutUser} icon={HiOutlineLogout}>
                        Log Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SideBar