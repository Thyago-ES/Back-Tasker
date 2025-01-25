import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteWorkspaceService } from "../../services/Workspace/DeleteWorkspaceService";

interface DeleteRequestProps {
	Params: { userId: string; id: string };
}

export class DeleteWorkspaceController {
	async handle(request: FastifyRequest<DeleteRequestProps>, reply: FastifyReply) {
		const { userId, id } = request.params;

		const response = await new DeleteWorkspaceService().execute({
			userId: Number(userId),
			id: Number(id),
		});

		reply.send(response);
	}
}
