import { User } from "../../@types/User";
import { prismaClient } from "../../prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const privateKey = process.env.JWT_SECRET as string;

export class LoginUserService {
	async execute({ email, password }: Pick<User, "email" | "password">) {
		if (!email) {
			throw new Error("Digite um email!");
		}

		const user = await prismaClient.user.findFirst({ where: { email } });

		if (!user) {
			throw new Error("Usuário não existe!");
		}

		if (!(await bcrypt.compare(password, user.password))) {
			throw new Error("A senha está incorreta!");
		}

		const { id, name } = user;

		return {
			user: {
				id,
				name,
				email,
			},
			token: jwt.sign({ id }, privateKey, { expiresIn: "7d" }),
		};
	}
}
