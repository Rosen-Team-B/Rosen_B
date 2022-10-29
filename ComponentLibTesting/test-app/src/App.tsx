import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "@blueprintjs/core"
class App extends Component{
  render(): React.ReactNode {
      return(
        
        <div>
          <h1>Hello World</h1>
          <h4>ReactJS Blueprint Button Component</h4>
        <Button>Sample Button</Button> <br></br>
        <Button icon="refresh">Icon Button</Button>
        <h4>ReactJS Blueprint Menu Component</h4>
            <Menu className={Classes.ELEVATION_1}>
                <MenuItem icon={<Icon icon="home" />} text="Home" />
                <MenuDivider />
                <MenuItem icon="new-link" text="WebLinks" />
                <MenuItem icon="user" text="Profile" />
                <MenuDivider />
                <MenuItem icon="cog" text="Setting" />
            </Menu>
        
        </div>
        
      )
  }
}

export default App;
