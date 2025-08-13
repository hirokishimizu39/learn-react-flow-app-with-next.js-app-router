"use client";

import "@xyflow/react/dist/style.css";
import { ReactFlow, Background, Controls, applyNodeChanges, NodeChange, applyEdgeChanges, addEdge } from "@xyflow/react";
import { useCallback, useState } from "react";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: "input",
    data: { label: "1" },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    type: "input",
    data: { label: "2" },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

export default function HomePage() {

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
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
