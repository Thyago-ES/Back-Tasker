import Fastify from "fastify";
import cors from "@fastify/cors";

import { userRoutes } from "./routes/user";
import { taskRoutes } from "./routes/task";
import { workspaceRoutes } from "./routes/workspace";
import { authentication } from "./middlewares/auth";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
	reply.status(400).send({ message: error.message });
});

const start = async () => {
	await app.register(cors);
	app.register(async (privateRoutes) => {
		privateRoutes.addHook("onRequest", authentication);

		await app.register(workspaceRoutes);
		await app.register(taskRoutes);
	});

	await app.register(userRoutes);

	try {
		await app.listen({ port: 3000 });
	} catch (error) {
		console.log("Deu ruim");
		console.error(error);
	}
};

start();
