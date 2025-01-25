import { prismaClient } from "../../prisma";
import { Task } from "../../@types/Task";

export class CreateTaskService {
	async execute({ workspaceId, title, situation }: Omit<Task, "id">) {
		const newTask = await prismaClient.task.create({
			data: {
				title,
				workspaceId,
				situation,
			},
		});

		return newTask;
	}
}
