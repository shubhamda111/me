import { useState,useEffect } from "react"
import hr from "../assets/images/curve-hr.svg"
import { projectDetails } from "./projectDetails"

export default function Projects(){
    const [count,setCount]=useState(3)
    const [show,setShow]=useState(true)

    useEffect(() => {
        if(count>=projectDetails.length){
            setShow(false)
        }
      }, [count]);

    const handleShow=()=>{
        setCount(prevCount => prevCount + 3)
    }
    return (
        <div id="project" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of my Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                {projectDetails.slice(0,count).map(item=>{
                    return(
                    <a href={item.project_url} target="_blank">
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                        <img src={item.image} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                        <div className="mt-2">
                            <h1 className="font-bold md:text-xl">{item.project_name}</h1>
                            {/* <p className="font-light md:text-lg" style={{color:"#2E8BC0",fontWeight:'500'}}>URL :<label style={{color:"orange"}}> {item.project_url}</label></p> */}
                            {/* <p className="font-light text-gray-400" style={{color:"#2E8BC0",fontWeight:'500'}}>Technology used <label style={{color:"orange"}}>{item.project_tech}</label></p> */}
                            <p className="font-light text-gray-400">{item.project_tech}</p>
                        
                        </div>
                    </div>
                    </a>
                    )
                })}
            </div>
            {show ?<div onClick={handleShow} className="show_more">Show more</div>:''}
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
