import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateTaskService } from "../../services/Task/UpdateTaskService";
import { Situation_Enum } from "@prisma/client";

interface UpdateRequestProps {
	Params: { workspaceId: string; id: string };
	Body: { title: string; situation: Situation_Enum };
}

export class UpdateTaskController {
	async handle(request: FastifyRequest<UpdateRequestProps>, reply: FastifyReply) {
		const { workspaceId, id } = request.params;
		const { title, situation } = request.body;

		const response = await new UpdateTaskService().execute({
			workspaceId: Number(workspaceId),
			id: Number(id),
			title,
			situation,
		});

		reply.send(response);
	}
}
