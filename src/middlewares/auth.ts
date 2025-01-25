import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import jwt from "jsonwebtoken";

const privateKey = process.env.JWT_SECRET as string;

export function authentication(
	request: FastifyRequest,
	reply: FastifyReply,
	done: HookHandlerDoneFunction
) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new Error("Token não fornecido!");
	}

	const [, token] = authHeader.split(" ");

	try {
		const decoded = jwt.verify(token, privateKey) as { id: number };

		request.userId = decoded.id;
		done();
	} catch (err) {
		throw new Error("Token inválido!");
	}
}
