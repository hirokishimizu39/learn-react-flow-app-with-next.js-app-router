import "@xyflow/react/dist/style.css";
import { ReactFlow, Background, Controls } from "@xyflow/react";

export default function HomePage() {
  return (
    <div className="relative size-full">
      <div className="absolute top-0 left-0 size-full text-yellow-500">
        reactflowを実装するまでの表示用
      </div>
      <ReactFlow>
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
