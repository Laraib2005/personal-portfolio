import { HeaderItems,userInfo } from "@/constants/constants";

const Intro: React.FC=() => {
return(
    <section 
    id={HeaderItems.home.page}
    className="h-screen flex flex-col text-center justify-center items-center">
    

<div className="md:ml-20 sm:ml-12 md:w-1/2" >
    <h1 className="text-7xl uppercase hidden md:block ">Software Developer</h1>
    <h1 className="text-2xl mt-5 md:text-3xl">
        Hi,I&#39;<span className="text-red-600 text-3xl md:text-4xl">{userInfo.name}</span>
        </h1>
        <p
        className="mt-4 mb-4"
        dangerouslySetInnerHTML={{ __html: userInfo.heading}}
        />
        < button
        className="bg-teal-600 w-28 h-10 rounded text-neutral-100">Contact us</button>
</div>
    </section>
)

}

export default Intro