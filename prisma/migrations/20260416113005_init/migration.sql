-- CreateTable
CREATE TABLE "Scan" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "dateRange" TEXT NOT NULL,
    "scannedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Scan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BannedPlayer" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "profileUrl" TEXT NOT NULL,
    "firstDetected" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BannedPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScanResult" (
    "id" SERIAL NOT NULL,
    "scanId" INTEGER NOT NULL,
    "bannedPlayerId" INTEGER NOT NULL,
    "games" JSONB NOT NULL,

    CONSTRAINT "ScanResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BannedPlayer_username_key" ON "BannedPlayer"("username");

-- AddForeignKey
ALTER TABLE "ScanResult" ADD CONSTRAINT "ScanResult_scanId_fkey" FOREIGN KEY ("scanId") REFERENCES "Scan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScanResult" ADD CONSTRAINT "ScanResult_bannedPlayerId_fkey" FOREIGN KEY ("bannedPlayerId") REFERENCES "BannedPlayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
