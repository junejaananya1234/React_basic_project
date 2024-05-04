

const NavBar = ()=>{
    return(
        <div className=" w-full flex justify-between font-sans items-center pl-5 pr-5 text-sm"> 
            <section className="flex">
                <img src="https://jpcdn.it/img/r/292/146/62cc76d972b39d8e2a4dec25de771f62.png " className="h-30 w-28"></img>
            </section>
            <section className="flex">
                <ul className="flex gap-6 font-bold">
                    <li>Platform</li>
                    <li>Plans</li>
                    <li>Enterprise</li>
                    <li>Resources</li>
                    <li>Education</li>
                </ul>
            </section>
            <section className="flex">
            <ul className="flex gap-4">
            <li>Contact Us</li>
            <li>Log In</li>
            <li className=""><button className="bg-green-600 p-2">Sign Up</button></li></ul>
            </section> 
        
        </div>
    )
}

export default NavBar;