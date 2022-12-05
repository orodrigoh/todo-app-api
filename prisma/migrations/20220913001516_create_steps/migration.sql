-- CreateTable
CREATE TABLE "steps" (
    "id" TEXT NOT NULL,
    "id_project" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "steps_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "steps" ADD CONSTRAINT "steps_id_project_fkey" FOREIGN KEY ("id_project") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
