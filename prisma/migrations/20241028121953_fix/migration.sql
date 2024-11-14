/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phoneNumber1` VARCHAR(191) NOT NULL,
    `phoneNumber2` VARCHAR(191) NOT NULL,
    `payingStyle` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `status` ENUM('SUCCESSFULLY_NOTICED', 'NOT_ANSWERED', 'NOT_CALLED', 'SUCCESSFULLY_SUBMITTED') NOT NULL DEFAULT 'NOT_CALLED',
    `description` VARCHAR(191) NULL,
    `lastCalled` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `role` VARCHAR(191) NOT NULL DEFAULT ' Member',

    UNIQUE INDEX `Member_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
