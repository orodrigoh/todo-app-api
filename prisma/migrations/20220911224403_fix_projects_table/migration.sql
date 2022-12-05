/*
  Warnings:

  - You are about to drop the column `content` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `time_end` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "content",
DROP COLUMN "time_end";
