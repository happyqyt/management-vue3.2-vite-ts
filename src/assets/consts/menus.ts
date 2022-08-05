import {
  HomeFilled
} from '@element-plus/icons-vue'

import { MENU } from '../../types/menus'


/*
 * 为保持美观，第一层级菜单必须设置icon，子级菜单没有icon
 */
const menus:MENU[] = [
  {
    "text": "首页",
    "path": "/dashboard",
    "icon": HomeFilled,
    "children": []
  }
]

export default menus
