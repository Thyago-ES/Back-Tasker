import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteTaskService } from "../../services/Task/DeleteTaskService";

interface DeleteRequestProps {
	Params: { workspaceId: string; id: string };
}

export class DeleteTaskController {
	async handle(request: FastifyRequest<DeleteRequestProps>, reply: FastifyReply) {
		const { workspaceId, id } = request.params;

		const response = await new DeleteTaskService().execute({
			workspaceId: Number(workspaceId),
			id: Number(id),
		});

		reply.send(response);
	}
}
