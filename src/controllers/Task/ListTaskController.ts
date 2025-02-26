import { FastifyRequest, FastifyReply } from "fastify";
import { ListTaskService } from "../../services/Task/ListTaskService";

interface ListRequestProps {
	Params: { workspaceId: string };
}

export class ListTaskController {
	async handle(request: FastifyRequest<ListRequestProps>, reply: FastifyReply) {
		const { workspaceId } = request.params;

		const response = await new ListTaskService().execute({
			workspaceId: Number(workspaceId),
		});

		reply.send(response);
	}
}
