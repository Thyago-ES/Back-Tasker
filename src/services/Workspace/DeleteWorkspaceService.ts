import { prismaClient } from "../../prisma";
import { Workspace } from "../../@types/Workspace";

export class DeleteWorkspaceService {
	async execute({ userId, id }: Omit<Workspace, "title">) {
		const existsWorkspace = await prismaClient.workspace.findFirst({
			where: { userId, id },
		});

		if (!existsWorkspace) {
			throw new Error("Workspace não encontrado!");
		}

		await prismaClient.workspace.delete({
			where: { userId, id },
		});

		return { message: "Workspace deletado com sucesso!" };
	}
}
