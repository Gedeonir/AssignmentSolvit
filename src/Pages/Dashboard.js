/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Cards from "../component/cards";
import Sidebar from "../component/Sidebar";
import Table from "../component/Table";
import Form from "../component/Form"

const DashBoard=()=>{

    const [section,setSection]=React.useState("Dashboard");
    const [open,setOpen]=React.useState(false);

    const handleSectionChange=(sectionName)=>{
        setSection(sectionName);
    }

    console.log(open);
    return(
       <div>
            <Sidebar section={section} handleSectionChange={handleSectionChange} open={open} setOpen={setOpen}>
                {section=="Dashboard"?(
                    <>
                    <Cards/>
                    </>
                ):(
                    <Form/>
                )}

                
            </Sidebar>
       </div>
    )
}

export default DashBoard