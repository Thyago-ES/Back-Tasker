import { FastifyRequest, FastifyReply } from "fastify";
import { ListWorkspaceService } from "../../services/Workspace/ListWorkspaceService";

interface ListRequestProps {
	Params: { userId: string };
}

export class ListWorkspaceController {
	async handle(request: FastifyRequest<ListRequestProps>, reply: FastifyReply) {
		const { userId } = request.params;

		const response = await new ListWorkspaceService().execute({
			userId: Number(userId),
		});

		reply.send(response);
	}
}
