/*
  Warnings:

  - You are about to drop the column `description` on the `Student` table. All the data in the column will be lost.
  - Added the required column `father` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "father" TEXT NOT NULL,
    "roll_number" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Student" ("class", "created_at", "id", "name", "phone", "roll_number") SELECT "class", "created_at", "id", "name", "phone", "roll_number" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
