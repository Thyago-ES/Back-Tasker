import { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { LoginUserController } from "../controllers/User/LoginUserController";

export function userRoutes(fastify: FastifyInstance) {
	fastify.post("/users/register", new CreateUserController().handle);
	fastify.post("/users/login", new LoginUserController().handle);
}
