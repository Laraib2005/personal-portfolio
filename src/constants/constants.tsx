import { UserObject } from "@/models/user"
import { NavItems } from "@/models/Header"

export const userInfo: UserObject = {
    name:'Laraib Rizwan',
    heading:'I&#39;m a Software Engineer based in pakistan,with a passion for creating elegant and efficient solution that seamlessly integrate user-friendly experience.I&#39;ve built website,desktop application,and corporate software,leveraging cutting-edge technologies to drive innovation and enhance business processes',
    about:`
    <p>I am a passionate Software Engineer with a strong background in web development.I have been crafting digital experience for 5 years.</p>
 <p>My journey in IT began in 2021 since then,I've had the privilage to work on a diverse range of ptojects,allowing me to refine my skills and approach to problem-solving.</p>
 <p>I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts.</p>
 `,
skills:['React','Next','Data Structure','Java','HTML','typescript','css'],
}
export const HeaderItems: NavItems = {
    home: {label:'Home',page:'home'},
    about: {label:'About',page:'about'},
    contact:{label:'Contact',page:'Contact'},

}
