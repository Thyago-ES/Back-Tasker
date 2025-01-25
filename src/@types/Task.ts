import { Situation_Enum } from "@prisma/client";

export interface Task {
	id: number;
	workspaceId: number;
	title: string;
	situation: Situation_Enum;
}
