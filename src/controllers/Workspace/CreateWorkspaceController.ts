import { FastifyRequest, FastifyReply } from "fastify";
import { CreateWorkspaceService } from "../../services/Workspace/CreateWorkspaceService";

interface CreateRequestProps {
	Params: { userId: string };
	Body: { title: string };
}

export class CreateWorkspaceController {
	async handle(request: FastifyRequest<CreateRequestProps>, reply: FastifyReply) {
		const { userId } = request.params;
		const { title } = request.body;

		const response = await new CreateWorkspaceService().execute({
			userId: Number(userId),
			title,
		});

		reply.send(response);
	}
}
