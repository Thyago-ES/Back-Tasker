import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateTaskService } from "../../services/Task/UpdateTaskService";
import { priority_enum, Situation_Enum } from "@prisma/client";

interface UpdateRequestProps {
	Params: { workspaceId: string; id: string };
	Body: { title: string; situation: Situation_Enum; description: string; priority: priority_enum };
}

export class UpdateTaskController {
	async handle(request: FastifyRequest<UpdateRequestProps>, reply: FastifyReply) {
		const { workspaceId, id } = request.params;
		const { title, situation, description, priority } = request.body;

		const response = await new UpdateTaskService().execute({
			workspaceId: Number(workspaceId),
			id: Number(id),
			title,
			situation,
			description,
			priority,
		});

		reply.send(response);
	}
}
