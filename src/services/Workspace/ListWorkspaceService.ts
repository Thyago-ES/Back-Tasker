import { prismaClient } from "../../prisma";
import { Workspace } from "../../@types/Workspace";

export class ListWorkspaceService {
	async execute({ userId }: Pick<Workspace, "userId">) {
		const workspaces = await prismaClient.workspace.findMany({
			where: { userId },
		});

		return workspaces;
	}
}
