import { Objective } from "@/types/objective";

// fetchして受け取るデータの型
export type ObjectiveIndexType = Objective & {
  owner: {
    id: string;
    name: string;
    avatarUrl: string;
  };
};


export type ObjectiveNodeData = ObjectiveIndexType & {
  kpiAlertLevelCounts: {
    [key: string]: number;
    // [K in AlertLevel as Lowercase<string & K>]: number;
  };
  assign: string;
  isLeaf?: boolean;
  label: string;
  onFold?: () => void;
  isFolded?: boolean;
  onClick?: () => void;
  onChange?: (value: string) => void;
  onOpenDetail?: () => void;
  onBlur?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onCreateChild?: () => void;
};