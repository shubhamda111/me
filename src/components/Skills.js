import hr from "../assets/images/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1
      };
      const settings1 = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills and Technologies</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>
             <div className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className='flex-1 flex flex-col gap-4 skill-custom-bg p-4 rounded-md shadow-lg'>
                        <div className="text-primary font-medium text-lg tracking-wider">Frontend</div>
                        <div class="flex flex-wrap gap-2">
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">HTML</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">CSS</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-red-500/60">Tailwind</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">Javascript</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Typescript</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">React Js</div>
                        </div>
                    </div>
                    
                    <div class="flex-1 flex flex-col gap-4 skill-custom-bg p-4 rounded-md shadow-lg">
                        <div class="text-primary font-medium text-lg tracking-wider">Backend</div>
                        <div class="flex flex-wrap gap-2">
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60">Node Js</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Express Js</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">Python</div>
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col gap-4 skill-custom-bg p-4 rounded-md shadow-lg">
                        <div class="text-primary font-medium text-lg tracking-wider">Database</div>
                        <div class="flex flex-wrap gap-2">
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60">MySql</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">MongoDB</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-red-500/60">Redis</div>
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col gap-4 skill-custom-bg p-4 rounded-md shadow-lg">
                        <div class="text-primary font-medium text-lg tracking-wider">Others</div>
                        <div class="flex flex-wrap gap-2">
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">React Native</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Blockchain</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">AWS</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Git</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">ES6</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">NPM</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Android Studio</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Xcode</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Windows</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Ubuntu</div>
                            <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">VS Code</div>
                        </div>
                    </div>

                </div>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}
