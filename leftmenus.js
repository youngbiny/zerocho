import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function leftmenus(props) {
    return (
    <Menu mode = {props.mode}>
        <Menu.Item key = "mail">
            <a href="/">Home</a>
        </Menu.Item>
        <SubMenu title={<span>Blogs</span>}>
            <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Opteion 1</Menu.Item>
                <Menu.Item key="setting:2">Opteion 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Opteion 3</Menu.Item>
                <Menu.Item key="setting:4">Opteion 4</Menu.Item>
            </MenuItemGroup>
        </SubMenu>
    </Menu>
    );
}

export default leftmenus;