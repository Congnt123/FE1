import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Trang Chủ',
  },
  {
    displayName: 'Bảng Điều Khiển',
    iconName: 'layout-grid-add',
    route: '/dashboard',
  },
  {
    navCap: 'Chức Năng',
  },
  {
    displayName: 'Lịch Sử Đơn Hàng',
    iconName: 'info-circle',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Danh Sách Sản Phẩm',
    iconName: 'list-details',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Danh Mục Sản Phẩm',
    iconName: 'list-details',
    route: '/ui-components/category', 
  },
  {
    displayName: 'Thêm Sản Phẩm',
    iconName: 'clipboard-text',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Đơn Hàng',
    iconName: 'table',
    route: '/ui-components/tables',
  },
  {
    navCap: 'Xác Thực ',
  },
  {
    displayName: 'Đăng Nhập',
    iconName: 'login',
    route: '/authentication',
    children: [
      {
        displayName: 'Đăng Nhập',
        iconName: 'point',
        route: '/authentication/login',
      },
    ],
  },
  {
    displayName: 'Đăng Kí',
    iconName: 'user-plus',
    route: '/authentication',
    children: [
      {
        displayName: 'Đăng Kí',
        iconName: 'point',
        route: '/authentication/register',
      },
    ],
  },
];
