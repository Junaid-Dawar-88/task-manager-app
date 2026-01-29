/*
  Warnings:

  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `topics` to the `Syllabus` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Topic";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Syllabus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teacher_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "topics" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "start_date" DATETIME,
    "end_date" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Syllabus_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Syllabus" ("created_at", "description", "end_date", "id", "start_date", "teacher_id", "title", "type") SELECT "created_at", "description", "end_date", "id", "start_date", "teacher_id", "title", "type" FROM "Syllabus";
DROP TABLE "Syllabus";
ALTER TABLE "new_Syllabus" RENAME TO "Syllabus";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
