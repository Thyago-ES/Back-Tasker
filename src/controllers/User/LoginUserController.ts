import { FastifyReply, FastifyRequest } from "fastify";
import { LoginUserService } from "../../services/User/LoginUserService";

interface LoginRequestProps {
	Body: { email: string; password: string };
}

export class LoginUserController {
	async handle(request: FastifyRequest<LoginRequestProps>, reply: FastifyReply) {
		const { email, password } = request.body;

		const response = await new LoginUserService().execute({ email, password });

		reply.send(response);
	}
}
