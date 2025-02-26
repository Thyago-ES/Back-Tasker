import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskService } from "../../services/Task/CreateTaskService";
import { priority_enum, Situation_Enum } from "@prisma/client";

interface CreateRequestProps {
	Params: { workspaceId: string };
	Body: { title: string; situation: Situation_Enum; description: string; priority: priority_enum };
}

export class CreateTaskController {
	async handle(request: FastifyRequest<CreateRequestProps>, reply: FastifyReply) {
		const { workspaceId } = request.params;
		const { title, situation, description, priority } = request.body;

		const response = await new CreateTaskService().execute({
			workspaceId: Number(workspaceId),
			title,
			situation,
			description,
			priority,
		});

		reply.send(response);
	}
}
