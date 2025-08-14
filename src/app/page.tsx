"use client";

import "@xyflow/react/dist/style.css";
import { 
  ReactFlow, 
  Background, 
  Controls, 
  applyNodeChanges, 
  NodeChange, 
  applyEdgeChanges, 
  addEdge, 
  useNodesState,
  Node,
  useEdgesState,
} from "@xyflow/react";
import { useCallback, useState } from "react";

const initialNodes = [
  {
    id: 'n1',
    position: { x: 0, y: 0 },
    data: { label: 'n1' },
  },
  {
    id: 'n2',
    position: { x: 0, y: 100 },
    data: { label: 'n2' },
  },
];

const initialEdges = [
  { id: 'n1-n2', source: 'n1', target: 'n2', animated: true, label: 'n1-n2', type: 'step' },
];

export default function HomePage() {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((prevEdges) => addEdge(params, prevEdges)),
    [],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
