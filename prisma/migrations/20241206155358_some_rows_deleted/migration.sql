/*
  Warnings:

  - You are about to drop the column `description` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastCalled` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `description`,
    DROP COLUMN `lastCalled`;
