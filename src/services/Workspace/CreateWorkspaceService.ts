import { prismaClient } from "../../prisma";
import { Workspace } from "../../@types/Workspace";

export class CreateWorkspaceService {
	async execute({ userId, title }: Omit<Workspace, "id">) {
		const newWorkspace = await prismaClient.workspace.create({
			data: {
				title,
				userId,
			},
		});

		return newWorkspace;
	}
}
