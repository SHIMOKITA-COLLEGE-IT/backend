-- CreateEnum
CREATE TYPE "GroupType" AS ENUM ('PROGRAM', 'HOUSE', 'HOME', 'COMMITTEE', 'CLUB');

-- CreateEnum
CREATE TYPE "SocialLinkType" AS ENUM ('WEBSITE', 'INSTAGRAM', 'TWITTER', 'FACEBOOK', 'LINE', 'SNAPCHAT', 'TIKTOK', 'YOUTUBE', 'GITHUB', 'LINKTREE', 'OTHER');

-- CreateEnum
CREATE TYPE "RootsType" AS ENUM ('COUNTRY', 'HOMETOWN', 'EDUCATION', 'WORK', 'GROUP');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firebaseAuthUid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "imageUrl" TEXT,
    "username" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nickName" TEXT,
    "showOnlyNickname" BOOLEAN NOT NULL DEFAULT false,
    "birthday" TIMESTAMP(3) NOT NULL,
    "hideAge" BOOLEAN NOT NULL DEFAULT false,
    "position" TEXT NOT NULL,
    "isAlumni" BOOLEAN NOT NULL DEFAULT false,
    "roomNumber" INTEGER NOT NULL,
    "postNumber" INTEGER NOT NULL,
    "bio" TEXT NOT NULL,
    "photoUrls" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "groupType" "GroupType" NOT NULL,
    "name" TEXT NOT NULL,
    "from" TIMESTAMP(3),
    "to" TIMESTAMP(3),
    "emoji" TEXT,
    "imageUrl" TEXT,
    "slackChannel" TEXT,
    "description" TEXT,
    "photoUrls" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "socialLinkType" "SocialLinkType" NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roots" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rootsType" "RootsType" NOT NULL,
    "googleMapUrl" TEXT,
    "introductionUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Roots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRootsTracing" (
    "userId" TEXT NOT NULL,
    "rootsId" INTEGER NOT NULL,
    "from" TIMESTAMP(3),
    "to" TIMESTAMP(3),

    CONSTRAINT "UserRootsTracing_pkey" PRIMARY KEY ("userId","rootsId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSkillAcquisition" (
    "userId" TEXT NOT NULL,
    "skillId" INTEGER NOT NULL,
    "rootsId" INTEGER,

    CONSTRAINT "UserSkillAcquisition_pkey" PRIMARY KEY ("userId","skillId")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "iconUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GroupToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_TagToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firebaseAuthUid_key" ON "User"("firebaseAuthUid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Group_groupType_name_from_to_key" ON "Group"("groupType", "name", "from", "to");

-- CreateIndex
CREATE UNIQUE INDEX "Roots_name_rootsType_key" ON "Roots"("name", "rootsType");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupToUser_AB_unique" ON "_GroupToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupToUser_B_index" ON "_GroupToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagToUser_AB_unique" ON "_TagToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TagToUser_B_index" ON "_TagToUser"("B");

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRootsTracing" ADD CONSTRAINT "UserRootsTracing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRootsTracing" ADD CONSTRAINT "UserRootsTracing_rootsId_fkey" FOREIGN KEY ("rootsId") REFERENCES "Roots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "UserSkillAcquisition" ADD CONSTRAINT "UserSkillAcquisition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkillAcquisition" ADD CONSTRAINT "UserSkillAcquisition_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSkillAcquisition" ADD CONSTRAINT "UserSkillAcquisition_userId_rootsId_fkey" FOREIGN KEY ("userId", "rootsId") REFERENCES "UserRootsTracing"("userId", "rootsId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToUser" ADD CONSTRAINT "_GroupToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupToUser" ADD CONSTRAINT "_GroupToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToUser" ADD CONSTRAINT "_TagToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToUser" ADD CONSTRAINT "_TagToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
