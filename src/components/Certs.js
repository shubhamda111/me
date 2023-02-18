import hr from "../assets/curve-hr.svg"
import blockchain_certi from "../assets/certs/blockchain_certi.jpg"
import hacking_certi from "../assets/certs/hacking_certi.jpg"
import hacking_certi1 from "../assets/certs/hacking_certi1.jpg"

import java_certi from "../assets/certs/java_certificate.jpg"
import python_certi from "../assets/certs/python.png"


export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
            <a href={blockchain_certi} target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={blockchain_certi} className="w-full h-56 mx-auto object-cover" alt="java"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Blockchain Certificate</h1>
                        <p className="font-light md:text-lg">Issued by Microsoft</p>
                    </div>
                </div>
                </a>
                <a href={python_certi} target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={python_certi} className="w-full h-56 mx-auto object-cover" alt="java"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Python Certificate</h1>
                        <p className="font-light md:text-lg">Issued by Udemy</p>
                    </div>
                </div>
                </a>
                <a href={java_certi} target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={java_certi} className="w-full h-56 mx-auto object-cover" alt="java"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Java Certificate</h1>
                        <p className="font-light md:text-lg">Issued by Varargs Training & Technology</p>
                    </div>
                </div>
                </a>
                <a href={hacking_certi} target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={hacking_certi} className="w-full h-56 mx-auto object-cover" alt="java"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Ethical Hacking Certificate</h1>
                        <p className="font-light md:text-lg">Issued by Innovative Ideas Infotech</p>
                    </div>
                </div>
                </a>
                <a href={hacking_certi1} target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={hacking_certi1} className="w-full h-56 mx-auto object-cover" alt="java"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Cyber Security & Ethical Hacking Certificate</h1>
                        <p className="font-light md:text-lg">Issued by Aptron</p>
                    </div>
                </div>
                </a>
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
