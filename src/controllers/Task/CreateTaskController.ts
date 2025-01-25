import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskService } from "../../services/Task/CreateTaskService";
import { Situation_Enum } from "@prisma/client";

interface CreateRequestProps {
	Params: { workspaceId: string };
	Body: { title: string; situation: Situation_Enum };
}

export class CreateTaskController {
	async handle(request: FastifyRequest<CreateRequestProps>, reply: FastifyReply) {
		const { workspaceId } = request.params;
		const { title, situation } = request.body;

		const response = await new CreateTaskService().execute({
			workspaceId: Number(workspaceId),
			title,
			situation,
		});

		reply.send(response);
	}
}
