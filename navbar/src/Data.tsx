import { LinkProps } from "./interfaces/LinkProps";
import { SocialLinkProps } from "./interfaces/SocialLinkProps";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { FaJira } from "react-icons/fa";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

export const pageLinks: LinkProps[] = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
];

export const socialLinks: SocialLinkProps[] = [
  {
    id: 1,
    icon: <AiOutlineTwitter />,
    url: "https://twitter.com/",
  },
  {
    id: 2,
    icon: <BsFacebook />,
    url: "https://www.facebook.com/",
  },
  {
    id: 3,
    icon: <BsLinkedin />,
    url: "https://www.linkedin.com",
  },
  {
    id: 4,
    icon: <AiOutlineGithub />,
    url: "https://github.com/",
  },
  {
    id: 5,
    icon: <FaJira />,
    url: "https://www.atlassian.com/",
  },
];
