/*
  Warnings:

  - Added the required column `author` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "author" TEXT NOT NULL;
