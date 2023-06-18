import { PageSubLink } from "./PageSubLink";

export interface PageLink {
  pageId: string;
  pageName: string;
  links: PageSubLink[];
}
