import hr from '../assets/curve-hr.svg'

export default function Footer(){
  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <ul className="text-center">
          <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
          <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
          <li className="p-4"><a href="#work" className="hover:underline">Work Experiences</a></li>
          <li className="p-4"><a href="#project" className="hover:underline">Projects</a></li>
          <li className="p-4"><a href="#education" className="hover:underline">Education</a></li>
          <li className="p-4"><a href="#certs" className="hover:underline">Certfications</a></li>
      </ul>

      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />
      <br/>
      <div className='footer_thankyou'>
        <h1 style={{fontWeight:'bolder',fontSize:'25px',color:"orange"}}>Thank <span style={{color:"white"}}>You</span></h1>
        <label>Thank you for taking the time to visit my profile. I truly appreciate your interest and the opportunity to share my background and experience with you. Your time is valuable, and I am grateful that you have chosen to spend some of it getting to know me.</label>
      </div><br/>
      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

      <p className="text-sm font-light text-center">Copyright © 2023 Shubham Srivastava. All Right Reserved</p>

    </div>
  )
}
