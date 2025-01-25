import { FastifyInstance } from "fastify";
import { CreateTaskController } from "../controllers/Task/CreateTaskController";
import { ListTaskController } from "../controllers/Task/ListTaskController";
import { UpdateTaskController } from "../controllers/Task/UpdateTaskController";
import { DeleteTaskController } from "../controllers/Task/DeleteTaskController";
import { authMiddleware } from "../middlewares/auth";

export function taskRoutes(fastify: FastifyInstance) {
	fastify.post("/workspaces/:workspaceId/tasks", new CreateTaskController().handle);
	fastify.get("/workspaces/:workspaceId/tasks", new ListTaskController().handle);
	fastify.put("/workspaces/:workspaceId/tasks/:id", new UpdateTaskController().handle);
	fastify.delete("/workspaces/:workspaceId/tasks/:id", new DeleteTaskController().handle);
}
