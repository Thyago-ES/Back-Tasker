import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateWorkspaceService } from "../../services/Workspace/UpdateWorkspaceService";

interface UpdateRequestProps {
	Params: { userId: string; id: string };
	Body: { title: string };
}

export class UpdateWorkspaceController {
	async handle(request: FastifyRequest<UpdateRequestProps>, reply: FastifyReply) {
		const { userId, id } = request.params;
		const { title } = request.body;

		const response = await new UpdateWorkspaceService().execute({
			userId: Number(userId),
			id: Number(id),
			title,
		});

		reply.send(response);
	}
}
