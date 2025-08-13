"use client";

import "@xyflow/react/dist/style.css";
import { ReactFlow, Background, Controls, applyNodeChanges, NodeChange, applyEdgeChanges, addEdge } from "@xyflow/react";
import { useCallback, useState } from "react";

const initialNodes = [
  {
    id: "n1",
    position: { x: 0, y: 0 },
    type: "input",
    data: { label: "n1" },
  },
  {
    id: "n2",
    position: { x: 0, y: 100 },
    type: "input",
    data: { label: "n2" },
  },
];

const initialEdges = [
  { id: 'n1-n2', source: 'n1', target: 'n2', animated: true, label: 'n1-n2' },
];

export default function HomePage() {

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((prevNodes) => applyNodeChanges(changes, prevNodes)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((prevEdges) => applyEdgeChanges(changes, prevEdges)),
    [],
  );
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
