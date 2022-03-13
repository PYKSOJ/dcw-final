import React, { Component } from "react";
import { Input, Menu, Button } from "semantic-ui-react";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="หน้าแรก"
          active={activeItem === "หน้าแรก"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="จองห้องแล็ป"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="เช็คห้องว่าง"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Button>Login With PSU PASSPROT</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
