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
import { ObjectiveNodeData } from "@/features/types/ObjectiveMapType";

const initialNodes = [
  {
    id: 'n1',
    position: { x: 0, y: 0 },
    data: { 
      label: 'n1',
      // type: Base,
      id: 'n1',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',

      // type: Objective,
      alertLevel: 'n1',
      organizationId: 'n1',
      title: 'n1',
      description: 'n1', 
      status: 'n1', 
      orderNo: 1, 
      parentObjectiveId: 'n1', 

      // type: ObjectiveIndexType
      owner: { id: 'n1', name: 'n1', avatarUrl: 'n1' }, 

      // type: ObjectiveNodeData
      kpiAlertLevelCounts: { 'n1': 1 }, 
      assign: 'n1', 
      isLeaf: false, 
      onFold: () => {}, 
      isFolded: false, 
      onClick: () => {}, 
      onChange: () => {}, 
      onOpenDetail: () => {}, 
      onBlur: () => {}, 
      onKeyDown: () => {}, 
      onCreateChild: () => {} 
    },
  },
  {
    id: 'n2',
    position: { x: 0, y: 100 },
    data: { 
      label: 'n2', 
      id: 'n2', 
      createdAt: '2021-01-01', 
      updatedAt: '2021-01-01', 
      alertLevel: 'n2', 
      organizationId: 'n2', 
      title: 'n2', 
      description: 'n2', 
      status: 'n2', 
      orderNo: 2, 
      parentObjectiveId: 'n2', 
      owner: { id: 'n2', name: 'n2', avatarUrl: 'n2' }, 
      kpiAlertLevelCounts: { 'n2': 2 }, 
      assign: 'n2', 
      isLeaf: false, 
      onFold: () => {}, 
      isFolded: false, 
      onClick: () => {}, 
      onChange: () => {}, 
      onOpenDetail: () => {}, 
      onBlur: () => {}, 
      onKeyDown: () => {}, 
      onCreateChild: () => {} 
    },
  },
] as Node<ObjectiveNodeData>[];

const initialEdges = [
  { id: 'n1-n2', source: 'n1', target: 'n2', animated: true, label: 'n1-n2', type: 'step' },
];

export default function HomePage() {

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<ObjectiveNodeData>>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((prevEdges) => addEdge(params, prevEdges)),
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
