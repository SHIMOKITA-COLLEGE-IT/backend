/*
  Warnings:

  - The values [OTHER] on the enum `SocialLinkType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SocialLinkType_new" AS ENUM ('WEBSITE', 'INSTAGRAM', 'TWITTER', 'FACEBOOK', 'LINE', 'SNAPCHAT', 'TIKTOK', 'YOUTUBE', 'GITHUB', 'LINKTREE');
ALTER TABLE "SocialLink" ALTER COLUMN "socialLinkType" TYPE "SocialLinkType_new" USING ("socialLinkType"::text::"SocialLinkType_new");
ALTER TYPE "SocialLinkType" RENAME TO "SocialLinkType_old";
ALTER TYPE "SocialLinkType_new" RENAME TO "SocialLinkType";
DROP TYPE "SocialLinkType_old";
COMMIT;

-- AlterTable
ALTER TABLE "SocialLink" ALTER COLUMN "socialLinkType" DROP NOT NULL;
