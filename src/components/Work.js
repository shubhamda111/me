import company from '../assets/images/coales.jpeg'
import company1 from '../assets/images/trancis.jpeg'
import hr from "../assets/images/curve-hr.svg"

export default function Work(){

    const experienced=()=>{
        var pastDate = new Date("2020-08-20");
        var currentDate = new Date();
        var timeDifference = currentDate - pastDate;
        var years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        var months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
        return `(${years} yrs ${months} mos)`
    }

    return (
        <div id="work" className="mt-4 text-white">
            <h1 className="text-2xl font-bold mb-3">Work Experiences</h1>
            <p className="font-light text-gray-400 mb-3">Here are some of my experience</p>
            <div className="card-deck desktop-view" >
                <div className="card bg-dark-100 mr-5 p-5" style={{display:'flex',flexDirection:'row'}}>
                    <img className="card-img-top" src={company} alt="Card image cap"/>
                    <div className="card-body ml-5 ">
                    <p className="text-xl font-bold text-gray-300">Sr. Software Engineer (Full stack developer)</p>
                    <p className=" text-gray-300">August 2020 to Present {experienced()}</p>
                    <p className="card-text">Working for Coalescence Technologies in a complete agile environment. Responsible for designing and implementing new innovative features and functionalities, establishing the MongoDB, Express, React and Node.js- MERN Stack website’s architecture, ensuring high-performance and availability, and managing all MERN Stack development & technical aspects. Wrrking with a Blockchain client and making back-end with Node, Express and Mongo doing inegration in front-end for them. I work closely with project stack holders and end customers to ensure an effective, visually appealing, and intuitive implementation. Also worked in app development with React-Native. Making from scratches to doing live on app store an play store. Also leading a team of 9 members to mentor, guide and assign them project tasks.</p>
                    </div>
                </div>
                <div className="card bg-dark-100 mr-5 p-5" style={{display:'flex',flexDirection:'row'}}>
                    <img className="card-img-top" src={company1} alt="Card image cap" height="200" width="200"/>
                    <div className="card-body ml-5 ">
                    <p className="text-xl font-bold text-gray-300">Junior Software Developer (Internship)</p>
                    <p className=" text-gray-300">March 2020 to August 2020 </p>
                    <p>Worked for Trancis Consulting Service in a complete agile environment. Worked with clients to develop layout, color scheme for their website and implemented it into a final interface design with the HTML/CSS and JavaScript.Created webpages according to client's guidelines and standards throughout the development and maintenance of the website using HTML, XHTML, CSS and JavaScript.Leveraged React JS resources for all data access, encapsulating URL’s and standardizing data access interfaces.Skilled in leading frameworks as React JS to build high-quality, scalable and reusable components and Front-end solution.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5 mobile-view">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={company} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <p className="text-xl font-bold text-gray-300">Sr. Software Engineer (Full stack developer)</p>
                        <p className=" text-gray-300">August 2020 to Present</p>
                        <p className="card-text">Working for Coalescence Technologies in a complete agile environment. Responsible for designing and implementing new innovative features and functionalities, establishing the MongoDB, Express, React and Node.js- MERN Stack website’s architecture, ensuring high-performance and availability, and managing all MERN Stack development & technical aspects. Wrrking with a Blockchain client and making back-end with Node, Express and Mongo doing inegration in front-end for them. I work closely with project stack holders and end customers to ensure an effective, visually appealing, and intuitive implementation. Also worked in app development with React-Native. Making from scratches to doing live on app store an play store. Also leading a team of 9 members to mentor, guide and assign them project tasks.</p>
                   </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={company1} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <p className="text-xl font-bold text-gray-300">Junior Software Developer (Internship)</p>
                        <p className=" text-gray-300">March 2020 to August 2020 </p>
                        <p>Worked for Trancis Consulting Service in a complete agile environment. Worked with clients to develop layout, color scheme for their website and implemented it into a final interface design with the HTML/CSS and JavaScript.Created webpages according to client's guidelines and standards throughout the development and maintenance of the website using HTML, XHTML, CSS and JavaScript.Leveraged React JS resources for all data access, encapsulating URL’s and standardizing data access interfaces.Skilled in leading frameworks as React JS to build high-quality, scalable and reusable components and Front-end solution.</p>
                     </div>
                </div>
            </div>

            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
