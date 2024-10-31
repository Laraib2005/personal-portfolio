import { HeaderItems,userInfo } from "@/constants/constants"; 
import Image from "next/image";


const Contact: React.FC = () => {
    return (
        <section id={HeaderItems.contact.page}
        className=" flex flex-col text-center justify-center items-center md:flex-row md:text-start">

<div >
    <br></br>
<h1 className="text-6xl my-6 mt-14 ">Contact</h1>

<form action="/action.php">
<input type="text" placeholder="Email"
className="bg-gray-300 text-black p-5 text-3xl rounded "
></input>
<br></br>
<input type="password" placeholder="password"
className="bg-gray-300 text-black p-5 text-3xl rounded mt-3" 
></input>
<br></br>
<br></br>
<br></br>
<textarea name="Feedback" placeholder="Give your feedback here" rows={6}
className="bg-gray-300 h-500 w-250 p-4 text-2xl my-3 md:3" ></textarea>
</form>
    <div>
        <h1 className="text-4xl  font-semibold">
            Why You Should Hire Me
        </h1>
        <h1 className="text-2xl mt-3 md:block break-words">As a skilled web developer, I possess the expertise to craft innovative,user-friendy,and high-performance web applications</h1>
   <br></br>
   <br></br>
   <br></br>
   <h1 className="text-3xl font-medium">E-mail</h1>
   <h1 className="text-1xl mt-3">laraibrizwan221@gmail.com</h1>
   <br></br>
   <h1 className="text-3xl font-medium">Phone Number</h1>
   <h1 className="text-1xl mt-3">+92334123019</h1>
   <br></br>
   
   <br></br>
   <br></br>
    </div>






</div>
        </section>
    )
}
export default Contact;
 
 