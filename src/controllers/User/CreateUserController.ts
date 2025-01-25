import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../../services/User/CreateUserService";

interface CreateRequestProps {
	Body: { name: string; email: string; password: string };
}

export class CreateUserController {
	async handle(request: FastifyRequest<CreateRequestProps>, reply: FastifyReply) {
		const { name, email, password } = request.body;

		const response = await new CreateUserService().execute({
			name,
			email,
			password,
		});

		reply.send(response);
	}
}
