import type { NavItem } from '@/types/layout';

/** Active nav item from current path only (all site links are path-based). */
export function isNavItemActive(item: NavItem, pathname: string): boolean {
  if (item.dropdown?.length) {
    return item.href.startsWith('/') && pathname === item.href;
  }
  if (item.href.startsWith('/')) {
    return pathname === item.href;
  }
  return false;
}

/** True when `pathname` matches a sub-link under this item’s dropdown (not the parent `item.href`). */
export function isNavDropdownChildActive(item: NavItem, pathname: string): boolean {
  if (!item.dropdown?.length) return false;
  return item.dropdown.some((sub) => sub.href.startsWith('/') && pathname === sub.href);
}
