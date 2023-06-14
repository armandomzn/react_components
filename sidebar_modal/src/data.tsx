import { LinkProps } from "./interfaces/LinkProps";
import { SocialLinkProps } from "./interfaces/SocialLinkProps";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillFolderOpen,
  AiFillContacts,
} from "react-icons/ai";
import { FaJira, FaHome } from "react-icons/fa";
import { BsFacebook, BsLinkedin, BsPersonCircle } from "react-icons/bs";

export const pageLinks: LinkProps[] = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "about",
    url: "/about",
    icon: <BsPersonCircle />,
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
    icon: <AiFillFolderOpen />,
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
    icon: <AiFillContacts />,
  },
];

export const socialLinks: SocialLinkProps[] = [
  {
    id: 1,
    icon: <BsLinkedin />,
    url: "https://www.linkedin.com",
  },
  {
    id: 2,
    icon: <AiOutlineGithub />,
    url: "https://github.com/",
  },
  {
    id: 3,
    icon: <BsFacebook />,
    url: "https://www.facebook.com/",
  },
  {
    id: 4,
    icon: <AiOutlineTwitter />,
    url: "https://twitter.com/",
  },
  {
    id: 5,
    icon: <FaJira />,
    url: "https://www.atlassian.com/",
  },
];
