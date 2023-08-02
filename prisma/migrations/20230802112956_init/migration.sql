-- CreateTable
CREATE TABLE `Listings` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Title` VARCHAR(255) NOT NULL,
    `Description` TEXT NOT NULL,
    `Bedrooms` INTEGER NOT NULL,
    `Bathrooms` INTEGER NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
