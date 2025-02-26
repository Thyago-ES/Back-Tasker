import { priority_enum, Situation_Enum } from "@prisma/client";

export interface Task {
	readonly id: number;
	workspaceId: number;
	title: string;
	description: string;
	situation: Situation_Enum;
	priority: priority_enum;
}
