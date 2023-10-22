-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.11.5-MariaDB-1:10.11.5+maria~ubu2204 - mariadb.org binary distribution
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table carApp.Car: ~0 rows (approximately)

-- Dumping data for table carApp.CarBrand: ~4 rows (approximately)
REPLACE INTO `CarBrand` (`brandId`, `brandName`) VALUES
	(1, 'Renault'),
	(2, 'Hyundai'),
	(3, 'Opel'),
	(4, 'Ford'),
	(5, 'Chevrolet'),
	(6, 'Skoda'),
    (7, 'Mercedes'),
    (8,'BMW'),
	(9, 'Toyota'),
	(10, 'Volkswagen'),
   	(11, 'Volvo'),
    (12, 'Audi');

-- Dumping data for table carApp.CarModel: ~16 rows (approximately)
REPLACE INTO `CarModel` (`modelId`, `modelName`, `carBrand_brandId`) VALUES
	(1, 'Clio', 1),
	(2, 'Megane', 1),
	(3, 'Fluence', 1),
	(4, 'Laguna', 1),
	(5, 'Accent', 2),
	(6, 'Accent Blue', 2),
	(7, 'Accent Era', 2),
	(8, 'i10', 2),
	(9, 'i20', 2),
	(10, 'i30', 2),
	(11, 'Corsa', 3),
	(12, 'Omega', 3),
	(13, 'Tigra', 3),
	(14, 'Ka', 4),
	(15, 'Focus', 4),
	(16, 'Fiesta', 4),
	(17, 'Symbol', 1),
   	(18, 'Taliant', 1),
    (19, 'Talisman', 1),
    (20, 'Astra', 3),
    (21, 'Insignia', 3),
    (22, 'Vectra',3),
    (23, 'Mondeo', 4),
    (24, 'Mustang',4),
    (25, 'Taurus',4),
    (26, 'Taunus',4),
    (27, 'Cruze',5),
    (28, 'Aveo',5),
    (29, 'Camaro', 5),
    (30, 'Impala', 5),
    (31, 'Octavia', 6),
    (32, 'Superb',6),
    (33, 'Fabia',6),
    (34, 'Scala',6),
    (35,'Rapid',6),
    (36, 'C180',7),
    (37, 'A180',7),
    (38, 'CLA200',7),
    (39, 'E220',7),
    (40, 'S400',7),
    (41, 'EQS580',7),
    (42, '1.16',8),
	(43, '3.20',8),
    (44, '3.16',8),
	(45, '5.20',8),
    (46, '5.35',8),
    (47, '7.40',8),
    (48, '7.60',8),
    (49, 'i3', 8),
    (50, 'i7',8),
    (51,'i8',8),
    (52, 'Corolla',9),
    (53, 'Auris',9),
    (54,'Yaris',9),
    (55, 'Corona',9),
    (56, 'Avensis',9),
    (57,'Camry',9),
    (58, 'Arteon',10),
    (59, 'Golf',10),
    (60, 'Jetta',10),
    (61, 'Passat',10),
    (62, 'Polo', 10),
    (63, 'EOS', 10),
    (64, 'Beetle', 10),
    (65, 'Scirocco',10),
    (66, 'S40',11),
    (67, 'S60',11),
    (68, 'S80',11),
    (69, 'S90',11),
    (70, 'V40',11),
    (71, 'V60',11),
    (72, 'V90',11),
    (73, 'C70',11),
    (74, 'A3',12),
    (75, 'A4',12),
    (76, 'A5',12),
    (77, 'A6',12),
    (78, 'A7',12),
    (79, 'A8',12),
    (80, 'RS3',12),
    (81, 'RS4',12),
    (82, 'RS5',12),
    (83, 'RS6',12),
    (84, 'RS7',12);


-- Dumping data for table carApp.User: ~1 rows (approximately)
REPLACE INTO `User` (`id`, `firstName`, `lastName`, `password`, `role`, `status`, `username`) VALUES
	(1, 'Uğur', 'Eriş', '$2a$10$TXXOl4bQbS9d5hA2QlH6uerMFNdOV3V8UzbPuiyXNpD4dsyS2Sbsu', 'ADMIN', 'ACTIVE', 'ugureris');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
