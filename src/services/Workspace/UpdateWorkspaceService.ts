import { prismaClient } from "../../prisma";
import { Workspace } from "../../@types/Workspace";

export class UpdateWorkspaceService {
	async execute({ userId, id, title }: Workspace) {
		if (!title) {
			throw new Error("Digite um título!");
		}

		const existsWorkspace = await prismaClient.workspace.findFirst({
			where: { userId, id },
		});

		if (!existsWorkspace) {
			throw new Error("Workspace não encontrado!");
		}

		const updatedWorkspace = await prismaClient.workspace.update({
			where: { userId, id },
			data: {
				title,
			},
		});

		return updatedWorkspace;
	}
}
