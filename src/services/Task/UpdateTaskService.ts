import { prismaClient } from "../../prisma";
import { Task } from "../../@types/Task";

export class UpdateTaskService {
	async execute({ workspaceId, id, title, situation }: Task) {
		const existsTask = await prismaClient.task.findFirst({
			where: { workspaceId, id },
		});

		if (!existsTask) {
			throw new Error("Tarefa não encontrado!");
		}

		let data = {};
		if (title) data = { title };
		if (situation) data = { ...data, situation };

		const updatedUser = await prismaClient.task.update({
			where: { id, workspaceId },
			data,
		});

		return updatedUser;
	}
}
