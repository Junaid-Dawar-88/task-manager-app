/*
  Warnings:

  - Made the column `attendance_date` on table `Attendance` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Attendance` required. This step will fail if there are existing NULL values in that column.
  - Made the column `student_id` on table `Attendance` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `Syllabus` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attendance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "student_id" INTEGER NOT NULL,
    "attendance_date" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "remarks" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Attendance_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Attendance" ("attendance_date", "created_at", "id", "remarks", "status", "student_id") SELECT "attendance_date", "created_at", "id", "remarks", "status", "student_id" FROM "Attendance";
DROP TABLE "Attendance";
ALTER TABLE "new_Attendance" RENAME TO "Attendance";
CREATE UNIQUE INDEX "Attendance_student_id_attendance_date_key" ON "Attendance"("student_id", "attendance_date");
CREATE TABLE "new_Syllabus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teacher_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
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
