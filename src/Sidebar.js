import React, { useContext, useEffect, useState } from 'react'
import MyContext from './Context/MyContext';
import { Modal, Button, Input } from 'antd';
const Sidebar = () => {

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
            data: { tableName: tableName.toLowerCase(),fields: [], },
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




    return (
        <div>
            <h3>Sidebar</h3>
            <div>
                <Button type='primary' onClick={showModal}>Add Table</Button>
                <Modal title="Table Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Input value={tableName} onChange={handleInputChange} placeholder="Enter Tabel Name" />
                </Modal>
            </div>
        </div>
    )
}

export default Sidebar
