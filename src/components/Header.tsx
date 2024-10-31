'use client'
 import { useState } from 'react'
 import { userInfo , HeaderItems} from "@/constants/constants"
import { NavItems } from "@/models/Header";
import { BiMenu } from 'react-icons/bi';
import { Link as ScrollLink } from 'react-scroll';

const Header : React.FC = () => {
    const [navItem,showNavItems] = useState <boolean>(false);
    return (
        <header className="bg-white p-6  justify-between fixed top-0 w-full z-10 md:flex">
            <div className='flex justify-between'>
<h2 className="text-2xl font-bold">{userInfo.name}</h2>
<BiMenu
size={30}
className="md:hidden"
onClick={() => showNavItems(prevState => !prevState)}
/>
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0  md:block ${navItem ?'block' : 'hidden'}` }>
{
    Object.keys(HeaderItems).map(item => (

<ScrollLink
to={HeaderItems[item as keyof NavItems].page}

        key={HeaderItems[item as keyof NavItems].label}
        className="block md:inline-block cursor-pointer"
        spy={true}
        smooth={true}

    
        >{HeaderItems[item as keyof NavItems].label}
        </ScrollLink>

    ))
}
            </div>
        </header>
    )
}
export default Header;