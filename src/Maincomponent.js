import React, { useState, useContext } from 'react';

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    TableOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, Modal, theme, Input } from 'antd';
import Compact from './compact';
import MyContext from './Context/MyContext';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Maincomponent = () => {

    const { initialNodes, setInitialNodes } = useContext(MyContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tableName, setTableName] = useState();

    function handleAddTable() {

        const minX = 0;
        const maxX = 100;
        const minY = 0;
        const maxY = 100;

        let newTable = {
            id: (Math.floor(Math.random() * (maxX - minX + 1)) + minX).toString(),
            type: 'textUpdater',
            position: { x: Math.floor(Math.random() * (maxX - minX + 1)) + minX, y: Math.floor(Math.random() * (maxY - minY + 1)) + minY },
            data: { tableName: tableName.toLowerCase(), fields: [], },
        }
        setInitialNodes([...initialNodes, newTable]);

    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        handleAddTable();
        setTableName('');
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleInputChange = (e) => {
        setTableName(e.target.value);
    };
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >

                    <Button type='primary' style={{marginLeft:10}} onClick={showModal}>
                        <TableOutlined style={{ fontSize: 20 }} />
                    </Button>
                    <Modal title="Table Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <Input value={tableName} onChange={handleInputChange} placeholder="Enter Tabel Name" />
                    </Modal>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Test</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            width: '100%',
                            height: '80%'
                        }}
                    >
                        <Compact />
                    </div>
                </Content>

            </Layout>
        </Layout>
    );
};
export default Maincomponent