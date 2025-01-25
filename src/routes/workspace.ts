import { FastifyInstance } from "fastify";
import { CreateWorkspaceController } from "../controllers/Workspace/CreateWorkspaceController";
import { ListWorkspaceController } from "../controllers/Workspace/ListWorkspaceController";
import { UpdateWorkspaceController } from "../controllers/Workspace/UpdateWorkspaceController";
import { DeleteWorkspaceController } from "../controllers/Workspace/DeleteWorkspaceController";

export function workspaceRoutes(fastify: FastifyInstance) {
	fastify.post("/users/:userId/workspaces", new CreateWorkspaceController().handle);
	fastify.get("/users/:userId/workspaces", new ListWorkspaceController().handle);
	fastify.put("/users/:userId/workspaces/:id", new UpdateWorkspaceController().handle);
	fastify.delete("/users/:userId/workspaces/:id", new DeleteWorkspaceController().handle);
}
