import galgotia from '../assets/galgotia.png'
import csjm from '../assets/csjm.png'


import hr from "../assets/curve-hr.svg"

export default function Education(){
    return (
        <div id="education" className="mt-4 text-white">
            <h1 className="text-2xl font-bold mb-3">Education</h1>
            <p className="font-light text-gray-400 mb-3">Here are my Education Details</p>
            
            <div className="card-deck desktop-view" >
                <div className="card bg-dark-100 mr-5 p-5" style={{display:'flex',flexDirection:'row'}}>
                    <img className="card-img-top" src={galgotia} alt="Card image cap"/>
                    <div className="card-body ml-5 ">
                    <p className="text-xl font-bold text-gray-300">Galgotias Collage of Engineering & Technology, Greater Noida </p>
                    <p className=" text-gray-300">Masters in Computer Application (MCA)</p>
                    <p className="card-text">Got 8.06 CGPA . As a Master of Computer Applications student, I gained hands-on experience in various cutting-edge technologies and programming languages, including C, Python, and Java. I also participated in group projects, honing my teamwork, problem-solving, and technical skills. I completed my final year project on 'Banking Management System' using JAVA , demonstrating my ability to turn theoretical knowledge into practical solutions.</p>
                    </div>
                </div>
                <div className="card bg-dark-100 mr-5 p-5" style={{display:'flex',flexDirection:'row'}}>
                    <img className="card-img-top" src={csjm} alt="Card image cap" height="200" width="200"/>
                    <div className="card-body ml-5 ">
                    <p className="text-xl font-bold text-gray-300">Chhatrapati Shahu Ji Maharaj University, Kanpur</p>
                    <p className=" text-gray-300">Bachelor in Computer Application (BCA)</p>
                    <p>As a Bachelor of Computer student, I gained a strong foundation in various technologies like C , C++, Basic DSA. I also participated in group project and actively participated in physical activities. I completed my final year project on 'Notepad' using JAVA , demonstrating my ability to turn theoretical knowledge into practical solutions.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5 mobile-view">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={galgotia} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <p className="text-xl font-bold text-gray-300">Galgotias Collage of Engineering & Technology, Greater Noida </p>
                        <p className=" text-gray-300">Masters in Computer Application (MCA)</p>
                        <p className="card-text">Got 8.06 CGPA . As a Master of Computer Applications student, I gained hands-on experience in various cutting-edge technologies and programming languages, including C, Python, and Java. I also participated in group projects, honing my teamwork, problem-solving, and technical skills. I completed my final year project on 'Banking Management System' using JAVA , demonstrating my ability to turn theoretical knowledge into practical solutions.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={csjm} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <p className="text-xl font-bold text-gray-300">Chhatrapati Shahu Ji Maharaj University, Kanpur</p>
                        <p className=" text-gray-300">Bachelor in Computer Application (BCA)</p>
                        <p>As a Bachelor of Computer student, I gained a strong foundation in various technologies like C , C++, Basic DSA. I also participated in group project and actively participated in physical activities. I completed my final year project on 'Notepad' using JAVA , demonstrating my ability to turn theoretical knowledge into practical solutions.</p>
                    </div>
                </div>
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
