
import { HeaderItems,userInfo } from "@/constants/constants"; 
import Image from "next/image";


const About: React.FC = () => {
    return (
        <section id={HeaderItems.about.page}
        className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start">

<div>
    
    </div>
<div >
<h1 className="text-6xl my-6 ">About</h1>
<h2 className="text-3xl my-4 ">
 Get to know me!
    </h2>
    <p 
    className="[&>P]:mt-5"
    dangerouslySetInnerHTML={{ __html:userInfo.about}}></p>
    <div className="mt-5 w-3/4 break-words">
        {userInfo.skills.map(skills => (
            <span className="bg-gray-300 m-1 p-2 font-semibold  inline-block rounded-md">{skills}</span>
        ))}
    </div>
</div>
        </section>
    )
}
export default About;