/*
  Warnings:

  - The values [todo,doing] on the enum `Situation_Enum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Situation_Enum_new" AS ENUM ('pendent', 'done');
ALTER TABLE "tasks" ALTER COLUMN "situation" TYPE "Situation_Enum_new" USING ("situation"::text::"Situation_Enum_new");
ALTER TYPE "Situation_Enum" RENAME TO "Situation_Enum_old";
ALTER TYPE "Situation_Enum_new" RENAME TO "Situation_Enum";
DROP TYPE "Situation_Enum_old";
COMMIT;
