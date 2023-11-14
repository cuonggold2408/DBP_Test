CREATE DATABASE  IF NOT EXISTS `DB_ctd` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `DB_ctd`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: DB_ctd
-- ------------------------------------------------------
-- Server version	5.7.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Cart`
--

DROP TABLE IF EXISTS `Cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cart` (
  `SmartPhone_id` int(11) NOT NULL,
  `SmartPhone_Quantity` int(11) DEFAULT NULL,
  `color` varchar(255) NOT NULL,
  `id_Customer` int(11) NOT NULL,
  PRIMARY KEY (`SmartPhone_id`,`color`,`id_Customer`),
  KEY `fk_constraint_2` (`id_Customer`),
  CONSTRAINT `fk_constraint_1` FOREIGN KEY (`SmartPhone_id`) REFERENCES `SmartPhone` (`id`),
  CONSTRAINT `fk_constraint_2` FOREIGN KEY (`id_Customer`) REFERENCES `Customer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cart`
--

LOCK TABLES `Cart` WRITE;
/*!40000 ALTER TABLE `Cart` DISABLE KEYS */;
INSERT INTO `Cart` VALUES (1,1,'black',14),(1,1,'black',15),(1,1,'black',16),(2,1,'black',5),(2,1,'black',13),(2,1,'black',15),(2,1,'black',16),(2,2,'black',18),(2,1,'black',19),(3,7,'black',5),(3,7,'black',15),(3,7,'black',16),(3,7,'black',17),(3,7,'black',18),(3,7,'black',19),(3,7,'black',23),(4,9,'black',5),(4,1,'black',17),(4,1,'black',18),(4,1,'black',20),(5,1,'black',5),(5,1,'black',20),(8,2,'black',5),(8,2,'black',17),(8,1,'white',17),(9,1,'black',17),(9,1,'black',18),(11,1,'white',24);
/*!40000 ALTER TABLE `Cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` VALUES (1,'nguyenvantuyentha1975@gmail.com','Nguyễn Thành Đạt','4545465465465'),(2,'nguyenvantuyentha1975@gmail.com','Nguyễn Thành Đạt','45564654'),(3,'nguyenvantuyentha1975@gmail.com','Nguyễn Thành Đạt','45564654'),(4,'nguyenvantuyentha1975@gmail.com','Nguyễn Thành Đạt','5757785'),(5,'tdt.trandinhtuan467@gmail.com','Nguyễn Thành Đạt','123456789'),(6,'vanhvu724@gmail.com','Nguyễn Thành Đạt','123456789'),(7,'tdt.trandinhtuan467467@gmail.com','Trần Đình Tuấn','123456789'),(8,'abc123@gmail.com','Trần Đình Tuấn','123456789'),(9,'abc1234@gmail.com','Trần Đình Tuấn','123456789'),(10,'abc12345@gmail.com','Trần Đình Tuấn','123456789'),(11,'abc123456@gmail.com','Trần Đình Tuấn','123456789'),(12,'abc132@gmail.com','Trần Đình Tuấn','123456789'),(13,'abc@gmail.com','Trần Đình Tuấn','123456789'),(14,'123@gmail.com','Trần Đình Tuấn','123456789'),(15,'abcd123@gmail.com','Nguyễn Thành Đạt','123456789'),(16,'abcd1234@gmail.com','Nguyễn Thành Đạt','123456789'),(17,'ntd@gmail.com','Nguyễn Thành Đạt','123456789'),(18,'ntd123@gmail.com','Nguyễn Thành Đạt','123456789'),(19,'123456@gmail.com','Nguyễn Thành Đạt','123456789'),(20,'acd@gmail.com','Nguyễn Thành Đạt','123456789'),(21,'123123@gmail.com','Nguyễn Thành Đạt','123456789'),(22,'one123@gmail.com','Nguyễn Thành Đạt','123456789'),(23,'ntd1001@gmail.com','Nguyễn Thành Đạt','ntd1001'),(24,'123456789@gmail.com','Trần Đình Tuấn','123456789'),(25,'cuong@gmail.com','Nguyễn Quang Cường','123456789');
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProductTransport`
--

DROP TABLE IF EXISTS `ProductTransport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductTransport` (
  `id_cart` int(11) DEFAULT NULL,
  `name_product` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `id_Customer` int(11) DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  KEY `id_cart` (`id_cart`),
  CONSTRAINT `ProductTransport_ibfk_1` FOREIGN KEY (`id_cart`) REFERENCES `Transport` (`id_cart`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProductTransport`
--

LOCK TABLES `ProductTransport` WRITE;
/*!40000 ALTER TABLE `ProductTransport` DISABLE KEYS */;
INSERT INTO `ProductTransport` VALUES (14,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','màu đen',1,19,'/images/samsungs23/ultra/s23-ultra-black.webp'),(14,'Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','màu đen',1,19,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(14,'Xiaomi Redmi Note 12 4GB 128GB | Chính hãng VN/A','màu đen',1,19,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(16,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','màu đen',1,19,'/images/samsungs23/ultra/s23-ultra-black.webp'),(16,'Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','màu đen',1,19,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(16,'Xiaomi Redmi Note 12 4GB 128GB | Chính hãng VN/A','màu đen',1,19,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(17,'Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','màu đen',1,20,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(17,'OPPO Find N2 Flip | Chính hãng VN/A','màu đen',1,20,'/images/oppo_findN2/oppo_findN2_black.webp'),(18,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','màu đen',1,19,'/images/samsungs23/ultra/s23-ultra-black.webp'),(18,'Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','màu đen',1,19,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(18,'Xiaomi Redmi Note 12 4GB 128GB | Chính hãng VN/A','màu đen',1,19,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(19,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','màu đen',1,19,'/images/samsungs23/ultra/s23-ultra-black.webp'),(19,'Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','màu đen',1,19,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(19,'Xiaomi Redmi Note 12 4GB 128GB | Chính hãng VN/A','màu đen',1,19,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(20,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','màu đen',1,21,'/images/samsungs23/ultra/s23-ultra-black.webp'),(20,'iPhone 14 128GB | Chính hãng VN/A','màu đen',1,21,'/images/iphone14/promax/ip_14_promax_black.webp'),(21,'iPhone 15 Pro Max 256GB | Chính hãng VN/A','màu đen',1,21,'/images/iphone15/iphone15promax/iphone15promaxBlack.webp'),(21,'iPhone 14 128GB | Chính hãng VN/A','màu đen',1,21,'/images/iphone14/promax/ip_14_promax_black.webp'),(21,'iPhone 11 64GB | Chính hãng VN/A','màu đen',1,21,'/images/iphone11/iphone11_black.webp'),(22,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','màu trắng',4,21,'/images/samsungs23/ultra/s23-ultra-white.webp'),(23,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','màu đen',1,21,'/images/samsungs23/ultra/s23-ultra-black.webp'),(23,'iPhone 14 128GB | Chính hãng VN/A','màu đen',1,21,'/images/iphone14/promax/ip_14_promax_black.webp'),(23,'Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','màu đen',1,21,'/images/xiaomi_note12/xiaomi_note12_black.webp'),(24,'Apple Macbook Air M2 2022 8GB 256GB Chính hãng Apple Việt Nam','màu trắng',1,12,'/images/macbook_m2_white.webp'),(24,'Laptop MSI Gaming Bravo 15 B7ED-010VN','màu trắng',1,12,'/images/MSI_Bravo_white.webp'),(25,'iPhone 14 128GB | Chính hãng VN/A','màu đen',7,25,'/images/iphone14/promax/ip_14_promax_black.webp'),(26,'iPhone 15 Pro Max 256GB | Chính hãng VN/A','màu đen',1,25,'/images/iphone15/iphone15promax/iphone15promaxBlack.webp'),(27,'Laptop Asus TUF GAMING F15 FX506HF-HN014W','màu đen',1,25,'/images/asus_f15_black.webp');
/*!40000 ALTER TABLE `ProductTransport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SmartPhone`
--

DROP TABLE IF EXISTS `SmartPhone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SmartPhone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_detail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ma_sp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SmartPhone`
--

LOCK TABLES `SmartPhone` WRITE;
/*!40000 ALTER TABLE `SmartPhone` DISABLE KEYS */;
INSERT INTO `SmartPhone` VALUES (1,'iPhone 15 Pro Max 256GB | Chính hãng VN/A','Iphone15 Promax','/images/iphone-15-pro-max_2__5.webp','88880'),(2,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','Samsung Galaxy S23 Ultra','/images/galaxys23ultra_front_green_221122_2.webp','88881'),(3,'iPhone 14 128GB | Chính hãng VN/A','iPhone 14 Pro Max 128GB','/images/iphone-14-storage-select-202209-6-1inch-y889.webp','88882'),(4,'Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','Xiaomi Redmi Note 12','/images/_76666_7__3.webp','88883'),(5,'OPPO Find N2 Flip | Chính hãng VN/A','OPPO Find N2 Flip','/images/n2_flip_-_combo_product_-_black.webp','88884'),(6,'iPhone 12 64GB | Chính hãng VN/A','iPhone 12 64GB','/images/iphone12.webp','88885'),(7,'Xiaomi Redmi Note 12 4GB 128GB | Chính hãng VN/A','Xiaomi Redmi Note 12','/images/gtt_7766_3__1.webp','88886'),(8,'iPhone 11 64GB | Chính hãng VN/A','iPhone 11 64GB','/images/iphone11.webp','88887'),(9,'Samsung Galaxy Z Fold5 12GB 256GB','Samsung Galaxy Z Fold5','/images/galaxy-z-fold-5-xanh-1.webp','88888'),(10,'iPhone 14 Plus 128GB | Chính hãng VN/A','iPhone 14 Plus 512GB','/images/iphone14plus.webp','88889'),(11,'Apple Macbook Air M2 2022 8GB 256GB Chính hãng Apple Việt Nam','Apple Macbook Air M2 2022','/images/Macbook/air_m2.webp','88890'),(12,'Laptop Asus TUF GAMING F15 FX506HF-HN014W','Laptop Asus TUF GAMING F15','/images/asus_f15.webp','88892'),(13,'Laptop MSI Gaming Bravo 15 B7ED-010VN','Laptop MSI Gaming Bravo','/images/MSI_Bravo.webp','88893'),(14,'Laptop Asus VivoBook 15 OLED A1505VA-L1114W','Laptop Asus VivoBook','/images/asus_vivobook.webp','88894'),(15,'Macbook Pro 14 M1 Pro 10 CPU - 16 GPU 16GB 1TB 2021 | Chính hãng Apple Việt Nam','Macbook Pro 14 M1 Pro','/images/macbook_pro_14M1pro.webp','88895'),(16,'Laptop ASUS X515MA-BR481W','Laptop ASUS','/images/asus_n4020.webp','88896'),(17,'Laptop Lenovo Ideapad Slim 5 14IAH8 83BF002NVN','Laptop Lenovo Ideapad Slim 5','/images/Lenovo_slim5.webp','88897'),(18,'MacBook Air 15 inch M2 2023 8GB 512GB | Chính hãng Apple Việt Nam','MacBook Air 15 inch M2','/images/macbook_air15m2.webp','88898'),(19,'Laptop Gigabyte G5 GD-51VN123SO','Laptop Gigabyte G5','/images/gigabyte_g5.webp','88899'),(20,'Laptop ASUS ZenBook UM3402YA-KM074W','Laptop ASUS ZenBook','/images/asus_zenbook.webp','88900');
/*!40000 ALTER TABLE `SmartPhone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SmartPhone_Detail`
--

DROP TABLE IF EXISTS `SmartPhone_Detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SmartPhone_Detail` (
  `id` int(11) NOT NULL,
  `color` varchar(255) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `price_left` varchar(255) DEFAULT NULL,
  `price_right` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`color`),
  CONSTRAINT `SmartPhone_Detail_ibfk_1` FOREIGN KEY (`id`) REFERENCES `SmartPhone` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SmartPhone_Detail`
--

LOCK TABLES `SmartPhone_Detail` WRITE;
/*!40000 ALTER TABLE `SmartPhone_Detail` DISABLE KEYS */;
INSERT INTO `SmartPhone_Detail` VALUES (1,'black','/images/iphone15/iphone15promax/iphone15promaxBlack.webp','38990000','37990000'),(1,'white','/images/iphone15/iphone15promax/iphone15promaxWhite.webp','37490000','37990000'),(2,'black','/images/samsungs23/ultra/s23-ultra-black.webp','31990000','22990000'),(2,'white','/images/samsungs23/ultra/s23-ultra-white.webp','31290000','22590000'),(3,'black','/images/iphone14/promax/ip_14_promax_black.webp','29990000','26790000'),(3,'white','/images/iphone14/promax/ip_14_promax_white.webp','29690000','26790000'),(4,'black','/images/xiaomi_note12/xiaomi_note12_black.webp','5790000','4990000'),(4,'white','/images/xiaomi_note12/xiaomi_note12_white.webp','5290000','4970000'),(5,'black','/images/oppo_findN2/oppo_findN2_black.webp','19990000','18990000'),(5,'white','/images/oppo_findN2/oppo_findN2_white.webp','19990000','18990000'),(6,'black','/images/iphone12/iphone12_black.webp','15990000','13790000'),(6,'white','/images/iphone12/iphone12_white.webp','15290000','13790000'),(7,'black','/images/xiaomi_note12/xiaomi_note12_black.webp','4990000','4290000'),(7,'white','/images/xiaomi_note12/xiaomi_note12_white.webp','4390000','4090000'),(8,'black','/images/iphone11/iphone11_black.webp','11990000','10490000'),(8,'white','/images/iphone11/iphone11_white.webp','11090000','10550000'),(9,'black','/images/samsung_zfold5/samsung_zfold5_black.webp','40990000','33990000'),(9,'white','/images/samsung_zfold5/samsung_zfold5_white.webp','40790000','33790000'),(10,'black','/images/iphone14/plus/iphone14_black.webp','24990000','21290000'),(10,'white','/images/iphone14/plus/iphone14_white.webp','24690000','21290000'),(11,'black','/images/macbook_m2_black.webp','32990000','26490000'),(11,'white','/images/macbook_m2_white.webp','32990000','26490000'),(12,'black','/images/asus_f15_black.webp','21990000','16890000'),(12,'white','/images/asus_f15_white.webp','21990000','16890000'),(13,'black','/images/MSI_Bravo_black.webp','18490000','16490000'),(13,'white','/images/MSI_Bravo_white.webp','18490000','16490000'),(14,'black','/images/asus_vivobook_black.webp','20990000','17990000'),(14,'white','/images/asus_vivobook_white.webp','20990000','17990000'),(15,'black','/images/macbook_pro_14M1pro_black.webp','65990000','44990000'),(15,'white','/images/macbook_pro_14M1pro.webp_white','65990000','44990000'),(16,'black','/images/asus_n4020_black.webp','7600000','6990000'),(16,'white','/images/asus_n4020_white.webp','7600000','6990000'),(17,'black','/images/Lenovo_slim5_black.webp','17290000','15290000'),(17,'white','/images/Lenovo_slim5_white.webp','17290000','15290000'),(18,'black','/images/macbook_air15m2_black.webp','37990000','34990000'),(18,'white','/images/macbook_air15m2_white.webp','37990000','34990000'),(19,'black','/images/gigabyte_g5_black.webp','19990000','17990000'),(19,'white','/images/gigabyte_g5_white.webp','19990000','17990000'),(20,'black','/images/asus_zenbook_black.webp','23900000','17990000'),(20,'white','/images/asus_zenbook_white.webp','23900000','17990000');
/*!40000 ALTER TABLE `SmartPhone_Detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Transport`
--

DROP TABLE IF EXISTS `Transport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Transport` (
  `id_Customer` int(11) DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `district` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `consume` int(11) DEFAULT NULL,
  `id_cart` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_cart`),
  KEY `fk_constraint_3` (`id_Customer`),
  CONSTRAINT `fk_constraint_3` FOREIGN KEY (`id_Customer`) REFERENCES `Customer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Transport`
--

LOCK TABLES `Transport` WRITE;
/*!40000 ALTER TABLE `Transport` DISABLE KEYS */;
INSERT INTO `Transport` VALUES (NULL,'','','','','','',NULL,1,'2023-11-10 19:12:02'),(17,'','','','','','',120274000,2,'2023-11-10 19:12:02'),(17,'','','','','','',141267000,3,'2023-11-10 19:12:02'),(18,'','','','','','',61980000,4,'2023-11-10 19:12:02'),(18,'','','','','','',84435400,5,'2023-11-10 19:12:02'),(18,'','','','','','',98525000,6,'2023-11-10 19:12:02'),(17,'123456789','123456789','123456789','123456789','123456789','123456789',141267000,7,'2023-11-10 19:42:32'),(19,'','','','','','',42770000,8,'2023-11-10 19:44:59'),(19,'','','','','','',38493000,9,'2023-11-10 19:46:08'),(19,'123456789','`123456789','123456789','123456789','123456789','12345789',29939000,10,'2023-11-10 19:49:44'),(19,'1231313','213123213','12312332','1234567','1232133123','1232312312',29939000,11,'2023-11-10 19:53:59'),(19,'1234567890','1234567890','1234567890','1234567890','1234567890','1234567890',29939000,12,'2023-11-10 19:58:38'),(19,'','','','','','',29939000,13,'2023-11-10 20:01:43'),(19,'','','','','','',29939000,14,'2023-11-10 20:04:10'),(20,'1','1','1','1','1','1',25780000,15,'2023-11-10 20:05:50'),(19,'1','1','1','1','1','1',29939000,16,'2023-11-10 20:10:53'),(20,'','','','','','',25780000,17,'2023-11-10 20:12:04'),(19,'now','now','now','now','now','now',29939000,18,'2023-11-10 20:23:56'),(19,'now123','now123','now123','now123','now123','now123',29939000,19,'2023-11-10 20:25:17'),(21,'','','','','','',61980000,20,'2023-11-10 21:06:21'),(21,'','','','','','',66395400,21,'2023-11-10 21:21:15'),(21,'','','','','','',87612000,22,'2023-11-10 21:21:46'),(21,'Nguyễn Thành Đạt','0848859895','nguyenvantuyentha1975@gmail.com','Hải Phòng','Thuỷ Nguyên','fighting',47439000,23,'2023-11-10 21:26:35'),(12,'','','','','','',36036000,24,'2023-11-14 07:42:38'),(25,'','','','','','',209930000,25,'2023-11-14 16:28:44'),(25,'','','','','','',27293000,26,'2023-11-14 16:31:32'),(25,'','','','','','',15393000,27,'2023-11-14 16:32:04');
/*!40000 ALTER TABLE `Transport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `codeDiscount`
--

DROP TABLE IF EXISTS `codeDiscount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `codeDiscount` (
  `rank` varchar(255) CHARACTER SET utf8 NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `min_rank` int(11) DEFAULT NULL,
  `max_rank` int(11) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`rank`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `codeDiscount`
--

LOCK TABLES `codeDiscount` WRITE;
/*!40000 ALTER TABLE `codeDiscount` DISABLE KEYS */;
INSERT INTO `codeDiscount` VALUES ('bronze',0,0,30000000,'/images/ranking/bronze.png'),('diamond',30,70000000,1000000000,'/images/ranking/diamond.png'),('gold',18,45000000,70000000,'/images/ranking/gold.png'),('silver',10,30000000,45000000,'/images/ranking/silver.png');
/*!40000 ALTER TABLE `codeDiscount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discount`
--

DROP TABLE IF EXISTS `discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discount` (
  `id_Customer` int(11) DEFAULT NULL,
  `consume` int(11) DEFAULT NULL,
  `rank` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  KEY `id_Customer` (`id_Customer`),
  KEY `fk_constraint_4` (`rank`),
  CONSTRAINT `discount_ibfk_1` FOREIGN KEY (`id_Customer`) REFERENCES `Customer` (`id`),
  CONSTRAINT `fk_constraint_4` FOREIGN KEY (`rank`) REFERENCES `codeDiscount` (`rank`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discount`
--

LOCK TABLES `discount` WRITE;
/*!40000 ALTER TABLE `discount` DISABLE KEYS */;
INSERT INTO `discount` VALUES (12,223430001,'diamond'),(13,0,'bronze'),(14,38990000,'silver'),(15,100970000,'diamond'),(16,231930000,'diamond'),(17,1981370000,'diamond'),(18,305700000,'diamond'),(19,427700000,'diamond'),(20,51560000,'gold'),(21,335880000,'diamond'),(22,0,'bronze'),(23,0,'bronze'),(24,0,'bronze'),(25,270910000,'diamond');
/*!40000 ALTER TABLE `discount` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-14 23:33:13
