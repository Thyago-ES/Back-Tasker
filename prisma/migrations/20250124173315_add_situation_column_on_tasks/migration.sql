/*
  Warnings:

  - Added the required column `situation` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Situation_Enum" AS ENUM ('todo', 'doing', 'done');

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "situation" "Situation_Enum" NOT NULL;
