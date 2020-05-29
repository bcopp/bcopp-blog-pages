import React, { useState} from 'react';
import { Menu } from 'antd';
import { HomeOutlined, FileOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

interface Props {}

const TopNavBar: React.FC<Props> = ({}) => {
  const [page, setPage] = useState<string>("home");
  const history = useHistory()

  function handleClick(e: { key: any; }) {
    console.log('click ', e);
    history.push(e.key)
    setPage(e.key)
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[page]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="blog" icon={<FileOutlined />}>
        Blog 
      </Menu.Item>
    </Menu>
  );
}

export default TopNavBar
