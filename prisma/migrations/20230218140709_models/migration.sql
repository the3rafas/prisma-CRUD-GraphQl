-- CreateTable
CREATE TABLE "Auther" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Auther_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "authorId" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Auther"("id") ON DELETE SET NULL ON UPDATE CASCADE;
