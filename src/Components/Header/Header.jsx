import Navbar from "../Navbar/Navbar.jsx";
export default function HeaderComponent() {
    const Logo = './icon.png'
    return (
        <div className="bg-blue-950 py-[20px] w-[100vw] ">
            <div className="flex h-[130px] items-center justify-between mx-5">
                <div><img src={Logo} alt="Logo Principal" /></div>
                <div><Navbar /></div>
            </div>
        </div>
    );
}
