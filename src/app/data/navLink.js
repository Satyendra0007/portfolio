import { CiHome } from "react-icons/ci";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { GrCertificate } from "react-icons/gr";

const navLinks = [
  {
    name: "Home",
    link: "/",
    Icon: <CiHome size={"1.2rem"} />
  },
  {
    name: "Skills",
    link: "/skill",
    Icon: <GiSkills size={"1.2rem"} />
  },
  {
    name: "Certifications",
    link: "/certificate",
    Icon: <GrCertificate size={"1.2rem"} />
  },
  {
    name: "Projects",
    link: "/project",
    Icon: <GoProject size={"1.2rem"} />
  },
  {
    name: "About",
    link: "/about",
    Icon: <SiAboutdotme size={"1.2rem"} />
  }
]

export default navLinks;