-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);
