import { useState, useCallback, useEffect, useContext } from 'react';
import ReactFlow, { Controls, Background, addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import CustomNode from './Components/Customnode';
import 'reactflow/dist/style.css';
import MyContext from './Context/MyContext';

// const initialNodes = [
//     { id: '4', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
// ]

const initialEdges = [
    // { id: '1-2', source: '1', target: '2' }
]

const nodeTypes = { textUpdater: CustomNode }

function Compact() {

    const { initialNodes, setInitialNodes } = useContext(MyContext);
    
    const [nodes, setNodes] = useState(initialNodes)
    const [edges, setEdges] = useState(initialEdges);

    useEffect(() => {
    }, [nodes, edges])

    const onNodesChanges = useCallback((changes) => {
        setInitialNodes((nds) => applyNodeChanges(changes, nds));
    }, []);

    const onEdgesChanges = useCallback((changes) => {
        setEdges((eds) => applyEdgeChanges(changes, eds))
    }, []);


    const onConnect = useCallback((params) => {
        setEdges((eds) => addEdge(params, eds))
    }, []);




    return (
        <div style={{ height: '100%' }}>
            <ReactFlow
                nodes={initialNodes}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChanges}
                onEdgesChange={onEdgesChanges}
                onConnect={onConnect}
                fitView
            >
                <Background variant='dots' size={2} gap={12} />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Compact;