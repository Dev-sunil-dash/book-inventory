import { Footer } from "flowbite-react";
import booklabLogo from "../../assets/booklabLogo.jpeg";
import { FaSwatchbook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <Footer container className="px-4 lg:px-24">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center">
            {/* <Footer.Brand
              src={booklabLogo}
              alt="Booklab Logo"
              className="font-bold"
            />
            <h3 className="text-black font-extrabold text-2xl">Booklab</h3> */}
            <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gap-2'><FaSwatchbook className='inline-block' />Booklab</Link>
          </div>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="Booklab™" year={2024} className="text-lg" />
      </div>
    </Footer>
  )
}

export default FooterSection;