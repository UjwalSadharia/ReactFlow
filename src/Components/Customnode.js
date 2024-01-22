import { useCallback, useState, useContext, useEffect } from "react";
import { Handle, Position } from "reactflow";
import './Customnode.css';
import { Button, Modal, Form, Input, Select } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
import MyContext from "../Context/MyContext";
import _ from 'lodash';

const CustomNode = ({ id, data, isConnectable }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fieldName, setFieldName] = useState('');
    const [datatype, setDatatype] = useState('');

    const { initialNodes, setInitialNodes } = useContext(MyContext);
    const { Option } = Select;


    const showModal = () => {
        setIsModalOpen(true);
    };

    function handleAddField(tableId) {
        const cloneInitialNodes = _.cloneDeep(initialNodes);

        const TableObj = cloneInitialNodes.find(item => item.id === tableId);

        const newField = { id: (TableObj.data.fields.length + 1).toString(), name: fieldName, type: datatype }

        TableObj.data.fields.push(newField);

        setInitialNodes(cloneInitialNodes);
    }

    const handleOk = (e) => {
        const Id = e.target.value;
        handleAddField(Id);
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onTypeChange = (value) => {
        switch (value) {
            case 'int':
                setDatatype('int')
                break;
            case 'varchar':
                setDatatype('varchar');
                break;
            case 'boolean':
                setDatatype('boolean');
                break;
            default:
        }
    };

    const handleInputChange = (e) => {
        setFieldName(e.target.value);
    };


    return (
        <div className="table-container">
            <span className="table-name">{data.tableName}</span>
            <div >
                <div >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>Datatype</th>
                            </tr>
                        </thead>
                        {data.fields.map(item => {
                            return <tbody key={item.id}>
                                <tr >
                                    <td>{item.name}</td>
                                    <td>{item.type}</td>
                                </tr>
                            </tbody>

                        })}
                    </table>
                </div >
            </div>
            <div>
                <Modal title="Add Fields" open={isModalOpen} footer={null} onCancel={handleCancel}>
                    <Form.Item
                        name="note"
                        label="FieldName"
                       
                    >
                        <Input onChange={handleInputChange} />
                    </Form.Item>
                    <Form.Item
                        name="datatype"
                        label="Datatype"
                        
                    >
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={onTypeChange}
                            allowClear
                        >
                            <Option value="int">Int</Option>
                            <Option value="varchar">Varchar</Option>
                            <Option value="boolean">Boolean</Option>
                        </Select>
                    </Form.Item>
                        <button value={id} onClick={handleOk}>Add</button>
                </Modal>
                <PlusCircleFilled onClick={showModal} />
            </div>
            {/* <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} /> */}
        </div>
    )
}

export default CustomNode;



