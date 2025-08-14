// import { AlertLevel } from "./alertLevel";
import { Base } from "./base";

export type Objective = Base & {
//   alertLevel: AlertLevel;
  alertLevel: string;
  organizationId: string;
  title: string;
  description: string | null;
  status: string;
  orderNo: number;
  parentObjectiveId: string | null;
};

export enum ObjectiveStatus {}
