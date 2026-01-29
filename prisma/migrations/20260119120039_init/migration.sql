/*
  Warnings:

  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `guardian_whatsapp` on the `Student` table. All the data in the column will be lost.
  - Added the required column `class` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Made the column `roll_number` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "roll_number" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Student" ("created_at", "id", "name", "roll_number") SELECT "created_at", "id", "name", "roll_number" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
