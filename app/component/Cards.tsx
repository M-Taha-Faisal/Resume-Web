export default function Cards(){
    return (
    <div className="flex my-8 justify-around items-center flex-wrap gap-4">
        <div className="bg-white h-80 w-60 bg-light flex flex-col justify-around items-center rounded-lg shadow-lg ">
           <h1 className=" bg-violet text-white rounded px-4 py-2 ">About Me</h1>
           <p className="text-sm m-2 text-gray-500">Hi there! I'm a 17-year-old web developer who is passionate about building amazing websites and web applications.I have expertise in Html, CSS, JavaScript, Next.js & TailwindCSS.In my free time, you'll usually find me tinkering with new technologies or reading up on the latest web development trends.  </p>
        </div>
        <div className="bg-white h-80 w-60 flex flex-col justify-around items-center border-2 rounded-lg shadow-lg">
        <h1 className="mt-2  bg-violet text-white rounded px-4 py-2 ">Education</h1>
        <p className="text-sm m-2 mt-0 text-gray-500">I have just done my Matriculation from Sindh Board & I am student at PIAIC enrolled in their Web 3.0 & Metaverse Program. Ever since I was young, I've always been fascinated by technology and the internet, and I knew early on that I wanted to pursue a career in this field. I started learning to code when I was 15 years old, and I've been hooked ever since.</p>
        </div>
        <div className="bg-white h-80 w-60 flex flex-col justify-center items-center rounded-lg shadow-lg">
           <h1 className="mb-1 bg-violet text-white rounded px-4 py-2 ">Skills</h1>
           <ul className="list-inside w-1/2 list-disc text-gray-500">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>ChakraUI</li>
            <li>TailwindCSS</li>
           </ul>
        </div>
    </div>
        
        )
}