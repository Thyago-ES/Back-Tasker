import { prismaClient } from "../../prisma";
import { Task } from "../../@types/Task";

export class DeleteTaskService {
	async execute({ workspaceId, id }: Pick<Task, "workspaceId" | "id">) {
		const existsTask = await prismaClient.task.findFirst({
			where: { workspaceId, id },
		});

		if (!existsTask) {
			throw new Error("Tarefa não existe!");
		}

		await prismaClient.task.delete({ where: { workspaceId, id } });

		return { message: "Tarefa deletada com sucesso" };
	}
}
