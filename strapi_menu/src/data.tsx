import { PageLink } from "./interfaces/PageLink";
import { nanoid } from "nanoid";
import { CgCommunity } from "react-icons/cg";
import { LuLibrary } from "react-icons/lu";
import {
  AiOutlineMobile,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineCloud,
  AiOutlineCloudServer,
  AiOutlineBank,
  AiOutlineTool,
  AiOutlineCoffee,
  AiOutlineQuestionCircle,
  AiOutlineBook,
} from "react-icons/ai";
import { SiGamedeveloper } from "react-icons/si";

export const pageLinks: PageLink[] = [
  {
    pageId: nanoid(),
    pageName: "product",
    links: [
      {
        id: nanoid(),
        label: "community edition",
        url: "product/community-edition",
        icon: <CgCommunity />,
      },
      {
        id: nanoid(),
        label: "media library",
        url: "product/media-library",
        icon: <LuLibrary />,
      },
      {
        id: nanoid(),
        label: "plugins",
        url: "product/plugins",
        icon: <AiOutlineTool />,
      },
    ],
  },
  {
    pageId: nanoid(),
    pageName: "solutions",
    links: [
      {
        id: nanoid(),
        label: "business teams",
        url: "solutions/business-teams",
        icon: <AiOutlineTeam />,
      },
      {
        id: nanoid(),
        label: "mobile applications",
        url: "solutions/mobile-applications",
        icon: <AiOutlineMobile />,
      },
      {
        id: nanoid(),
        label: "developers",
        url: "solutions/developers",
        icon: <SiGamedeveloper />,
      },
      {
        id: nanoid(),
        label: "financial services",
        url: "solutions/financial-services",
        icon: <AiOutlineBank />,
      },
    ],
  },
  {
    pageId: nanoid(),
    pageName: "community",
    links: [
      {
        id: nanoid(),
        label: "events",
        url: "community/events",
        icon: <AiOutlineCalendar />,
      },
      {
        id: nanoid(),
        label: "forum",
        url: "community/forum",
        icon: <AiOutlineMessage />,
      },
      {
        id: nanoid(),
        label: "meetup program",
        url: "community/meetup-program",
        icon: <AiOutlineCoffee />,
      },
      {
        id: nanoid(),
        label: "tutorials",
        url: "community/tutorials",
        icon: <AiOutlineBook />,
      },
      {
        id: nanoid(),
        label: "help",
        url: "community/help",
        icon: <AiOutlineQuestionCircle />,
      },
    ],
  },
  {
    pageId: nanoid(),
    pageName: "prices",
    links: [
      {
        id: nanoid(),
        label: "cloud",
        url: "prices/cloud",
        icon: <AiOutlineCloud />,
      },
      {
        id: nanoid(),
        label: "self hosted",
        url: "prices/self-hosted",
        icon: <AiOutlineCloudServer />,
      },
    ],
  },
];
