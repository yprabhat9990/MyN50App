export interface NavDropdownLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** When set, an arrow after the label opens this menu (used with About + more links). */
  dropdown?: NavDropdownLink[];
}

export interface FooterColumn {
  title: string;
  links: string[];
}
