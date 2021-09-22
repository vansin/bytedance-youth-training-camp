import logo from './logo.svg';
import antd_svg from './antd.svg';
import { DatePicker, Menu, Button, Row, Col,Input} from 'antd';
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
       <Row>
        <Col>
        <h1><img alt="logo" src={logo}></img>Ant Design</h1>
        </Col>
        <Col>
        <Input placeholder="Basic usage" />
        </Col>
        <Col>
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
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            资源
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
            国内镜像
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="更多">
            <Menu.Item key="6">Option 5</Menu.Item>
            <Menu.Item key="7">Option 6</Menu.Item>
            <Menu.Item key="8">Option 7</Menu.Item>
            <Menu.Item key="9">Option 8</Menu.Item>
          </SubMenu>
        </Menu>
        </Col>

        </Row>
          <div id="biglog" align="center">
            <img  alt="antd_svg" src={antd_svg}></img>
          </div>


        <div align="center">
            <Button type="primary">Primary Button</Button>

            
            <Button>Default Button</Button>
        </div>

        
        
    </div>
  );
}

export default App;
