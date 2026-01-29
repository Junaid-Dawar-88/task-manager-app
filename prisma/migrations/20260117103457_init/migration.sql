-- CreateTable
CREATE TABLE "Teacher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subject" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Syllabus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teacher_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT,
    "start_date" DATETIME,
    "end_date" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Syllabus_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "syllabus_id" INTEGER NOT NULL,
    "topic_name" TEXT NOT NULL,
    "scheduled_date" DATETIME,
    "day_of_week" TEXT,
    "description" TEXT,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "completion_date" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Topic_syllabus_id_fkey" FOREIGN KEY ("syllabus_id") REFERENCES "Syllabus" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "roll_number" TEXT,
    "guardian_whatsapp" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Exam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "exam_name" TEXT NOT NULL,
    "exam_date" DATETIME,
    "total_marks" INTEGER,
    "teacher_id" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Exam_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StudentMark" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "exam_id" INTEGER,
    "student_id" INTEGER,
    "obtained_marks" REAL,
    "percentage" REAL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "StudentMark_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "Exam" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "StudentMark_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "student_id" INTEGER,
    "attendance_date" DATETIME,
    "status" TEXT,
    "remarks" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Attendance_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teacher_id" INTEGER,
    "student_id" INTEGER,
    "subject" TEXT,
    "timing" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Schedule_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Schedule_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_roll_number_key" ON "Student"("roll_number");

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_student_id_attendance_date_key" ON "Attendance"("student_id", "attendance_date");
