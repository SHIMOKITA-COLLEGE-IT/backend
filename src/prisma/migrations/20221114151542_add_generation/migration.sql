/*
  Warnings:

  - The values [PROGRAM,HOUSE,HOME] on the enum `GroupType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `from` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Roots` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Roots` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Tag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[groupType,name]` on the table `Group` will be added. If there are existing duplicate values, this will fail.
  - Made the column `username` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "GenerationType" AS ENUM ('PROGRAM', 'HOUSE', 'HOME');

-- AlterEnum
BEGIN;
CREATE TYPE "GroupType_new" AS ENUM ('COMMITTEE', 'CLUB');
ALTER TABLE "Group" ALTER COLUMN "groupType" TYPE "GroupType_new" USING ("groupType"::text::"GroupType_new");
ALTER TYPE "GroupType" RENAME TO "GroupType_old";
ALTER TYPE "GroupType_new" RENAME TO "GroupType";
DROP TYPE "GroupType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "UserRootsTracing" DROP CONSTRAINT "UserRootsTracing_rootsId_fkey";

-- DropForeignKey
ALTER TABLE "UserRootsTracing" DROP CONSTRAINT "UserRootsTracing_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserSkillAcquisition" DROP CONSTRAINT "UserSkillAcquisition_skillId_fkey";

-- DropForeignKey
ALTER TABLE "UserSkillAcquisition" DROP CONSTRAINT "UserSkillAcquisition_userId_fkey";

-- DropIndex
DROP INDEX "Group_groupType_name_from_to_key";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "from",
DROP COLUMN "to";

-- AlterTable
ALTER TABLE "Roots" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" SET NOT NULL;

-- CreateTable
CREATE TABLE "Generation" (
    "id" SERIAL NOT NULL,
    "generationType" "GenerationType" NOT NULL,
    "name" TEXT NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "emoji" TEXT,
    "imageUrl" TEXT,
    "hexColor" TEXT,
    "slackChannel" TEXT,
    "description" TEXT,
    "photoUrls" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Generation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenerationToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Generation_generationType_name_from_to_key" ON "Generation"("generationType", "name", "from", "to");

-- CreateIndex
CREATE UNIQUE INDEX "_GenerationToUser_AB_unique" ON "_GenerationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GenerationToUser_B_index" ON "_GenerationToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Group_groupType_name_key" ON "Group"("groupType", "name");

-- AddForeignKey
ALTER TABLE "UserRootsTracing" ADD CONSTRAINT "UserRootsTracing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRootsTracing" ADD CONSTRAINT "UserRootsTracing_rootsId_fkey" FOREIGN KEY ("rootsId") REFERENCES "Roots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkillAcquisition" ADD CONSTRAINT "UserSkillAcquisition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkillAcquisition" ADD CONSTRAINT "UserSkillAcquisition_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenerationToUser" ADD CONSTRAINT "_GenerationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Generation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenerationToUser" ADD CONSTRAINT "_GenerationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
