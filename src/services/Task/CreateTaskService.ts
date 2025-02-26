import { prismaClient } from "../../prisma";
import { Task } from "../../@types/Task";

type CreateTaskProps = Omit<Task, "id">;

export class CreateTaskService {
	async execute({ workspaceId, title, situation, description, priority }: CreateTaskProps) {
		const newTask = await prismaClient.task.create({
			data: {
				title,
				workspaceId,
				situation,
				description,
				priority,
			},
		});

		return newTask;
	}
}
