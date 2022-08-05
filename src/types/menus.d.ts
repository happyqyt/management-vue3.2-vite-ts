type SUBMENU = {
  text: string;
  path: string;
  icon?: Object;
}

export interface MENU {
  text: string;
  path?: string;
  icon: Object;
  children?: SUBMENU[];
}
