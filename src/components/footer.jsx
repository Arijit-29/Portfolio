import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact Me</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          feel free to reach out
        </h3>
      </div>
      <ul className="text-sm md:text-xl space-y-3">
        <li>
          <a
            href="mailto:chatterjeearijit080@gmail.com"
            className="flex items-center gap-3"
          >
            <MdEmail size={30} />
            <span>Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Arijit-29"
            className="flex items-center gap-3"
          >
            <FaGithub size={30} />
            <span>Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ac2870"
            className="flex items-center gap-3"
          >
            <FaLinkedin size={30} />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61578156790136"
            className="flex items-center gap-3"
          >
            <FaFacebook size={30} />
            <span>Facebook</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
