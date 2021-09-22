import logo from './logo.svg';
import { DatePicker, Menu, Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;


function App() {
  return (
    <div className="App">
        <h1><img alt="logo" src={logo}></img>Ant Design</h1>
        {/* <DatePicker /> */}

        <Menu mode="horizontal">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            设计
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            文档
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            组件
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="资源">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>


    </div>
  );
}

export default App;
