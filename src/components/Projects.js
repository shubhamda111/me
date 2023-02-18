
import hr from "../assets/curve-hr.svg"
import explorer from "../assets/certs/explorer.png"
import landing from "../assets/certs/landing.png"
import wallet from "../assets/certs/wallet.png"
import wallet_mob from "../assets/certs/wallet_mob.jpeg"
import merchant_mob from "../assets/certs/merchnat_mob.jpeg"
import meme from "../assets/certs/meme.png"
import shopping from "../assets/certs/shopping.png"


export default function Projects(){
    return (
        <div id="project" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of my Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <a href="https://explorer.ovato.com" target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={explorer} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Ovato Blockchain Explorer</h1>
                        <p className="font-light md:text-lg" style={{color:"#2E8BC0",fontWeight:'500'}}>URL :<label style={{color:"orange"}}> https://explorer.ovato.com</label></p>
                        <p className="font-light text-gray-400" style={{color:"#2E8BC0",fontWeight:'500'}}>Technology used <label style={{color:"orange"}}>React, Node, Express & Mongo</label></p>
                    </div>
                </div>
                </a>
                <a href="https://wallet.ovato.com" target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={wallet} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Ovato Web Wallet</h1>
                        <p className="font-light md:text-lg" style={{color:"#2E8BC0",fontWeight:'500'}}>URL :<label style={{color:"orange"}}>https://wallet.ovato.com</label></p>
                        <p className="font-light text-gray-400" style={{color:"#2E8BC0",fontWeight:'500'}}>Technology used <label style={{color:"orange"}}>React, Node</label></p>
                    </div>
                </div>
                </a>
                <a href="https://ovato.com/en" target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={landing} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Ovato</h1>
                        <p className="font-light md:text-lg" style={{color:"#2E8BC0",fontWeight:'500'}}>URL :<label style={{color:"orange"}}> https://ovato.com/en</label></p>
                        <p className="font-light text-gray-400" style={{color:"#2E8BC0",fontWeight:'500'}}>Technology used <label style={{color:"orange"}}>React, Node</label></p>
                    </div>
                </div>
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.ovato.wallet&hl=en&gl=US" target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={wallet_mob} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Ovato Wallet App - Android</h1>
                        <p className="font-light md:text-lg" style={{color:"#2E8BC0",fontWeight:'500'}}>URL :<label style={{color:"orange"}}> https://play.google.com/store/apps/details?id=com.ovato.wallet&hl=en&gl=US</label></p>
                        <p className="font-light text-gray-400" style={{color:"#2E8BC0",fontWeight:'500'}}>Technology used <label style={{color:"orange"}}>React Native, FCM, Android Studio</label></p>
                    </div>
                </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.merchantwalletapp&hl=en&gl=US&pli=1" target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={merchant_mob} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Ovato Merchant App - Android</h1>
                        <p className="font-light md:text-lg" style={{color:"#2E8BC0",fontWeight:'500'}}>URL :<label style={{color:"orange"}}>https://play.google.com/store/apps/details?id=com.merchantwalletapp&hl=en&gl=US&pli=1</label></p>
                        <p className="font-light text-gray-400" style={{color:"#2E8BC0",fontWeight:'500'}}>Technology used <label style={{color:"orange"}}>React Native, FCM, Android Studio</label></p>
                    </div>
                </div>
                </a>
                <a href="https://github.com/srivastavshubham/React-Create-Memes" target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={meme} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Create Meme's Demo</h1>
                        <p className="font-light md:text-lg" style={{color:"#2E8BC0",fontWeight:'500'}}>URL :<label style={{color:"orange"}}> https://github.com/srivastavshubham/React-Create-Memes</label></p>
                        <p className="font-light text-gray-400" style={{color:"#2E8BC0",fontWeight:'500'}}>Technology used <label style={{color:"orange"}}>React</label></p>
                    </div>
                </div>
                </a>
                <a href="https://github.com/srivastavshubham/React-Shopping-App" target="_blank">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                    <img src={shopping} className="w-full h-56 mx-auto object-cover" alt="a"></img>
                    <div className="mt-2">
                        <h1 className="font-bold md:text-xl">Shopping Web Demo</h1>
                        <p className="font-light md:text-lg" style={{color:"#2E8BC0",fontWeight:'500'}}>URL :<label style={{color:"orange"}}> https://github.com/srivastavshubham/React-Shopping-App</label></p>
                        <p className="font-light text-gray-400" style={{color:"#2E8BC0",fontWeight:'500'}}>Technology used <label style={{color:"orange"}}>React, Context</label></p>
                    </div>
                </div>
                </a>
                
               
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
