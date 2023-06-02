import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]})

const About = () => {



  return (
     <div className="grid grid-cols-2 bg-indigo-400 h-12 text-center">
      <h1>About</h1>
      <Link href={"/"}>Link to home page</Link>
     </div>
  )
};
  
export default About;
  