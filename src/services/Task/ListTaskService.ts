import { prismaClient } from "../../prisma";
import { Task } from "../../@types/Task";

export class ListTaskService {
	async execute({ workspaceId }: Pick<Task, "workspaceId">) {
		const tasks = await prismaClient.task.findMany({
			where: { workspaceId },
		});

		return tasks;
	}
}
