import { prismaClient } from "../../prisma";
import { Task } from "../../@types/Task";

export class UpdateTaskService {
	async execute({ workspaceId, id, title, situation, description, priority }: Task) {
		const existsTask = await prismaClient.task.findFirst({
			where: { workspaceId, id },
		});

		if (!existsTask) {
			throw new Error("Tarefa não encontrado!");
		}

		const updatedUser = await prismaClient.task.update({
			where: { id, workspaceId },
			data: {
				title,
				situation,
				description,
				priority,
			},
		});

		return updatedUser;
	}
}
