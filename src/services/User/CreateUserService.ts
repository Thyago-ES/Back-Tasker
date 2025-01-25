import { prismaClient } from "../../prisma";
import { User } from "../../@types/User";
import bcrypt from "bcryptjs";

export class CreateUserService {
	async execute({ name, email, password }: Omit<User, "id">) {
		if (!name || !email || !password) {
			throw new Error("Preencha todos os campos!");
		}

		const existsUser = await prismaClient.user.findFirst({
			where: {
				email,
			},
		});

		if (existsUser) {
			throw new Error("Email já cadastrado!");
		}

		const hashedPassword = await bcrypt.hash(password, 8);

		const newUser = await prismaClient.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		return newUser;
	}
}
