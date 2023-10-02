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
  `SmartPhone_id` int(11) DEFAULT NULL,
  `SmartPhone_Quantity` int(11) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  KEY `SmartPhone_id` (`SmartPhone_id`),
  CONSTRAINT `Cart_ibfk_1` FOREIGN KEY (`SmartPhone_id`) REFERENCES `SmartPhone` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cart`
--

LOCK TABLES `Cart` WRITE;
/*!40000 ALTER TABLE `Cart` DISABLE KEYS */;
INSERT INTO `Cart` VALUES (3,1,'white');
/*!40000 ALTER TABLE `Cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SmartPhone`
--

DROP TABLE IF EXISTS `SmartPhone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SmartPhone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `name_detail` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `ma_sp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SmartPhone`
--

LOCK TABLES `SmartPhone` WRITE;
/*!40000 ALTER TABLE `SmartPhone` DISABLE KEYS */;
INSERT INTO `SmartPhone` VALUES (1,'iPhone 15 Pro Max 256GB | Chính hãng VN/A','Iphone15 Promax','/images/iphone-15-pro-max_2__5.webp','88880'),(2,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','Samsung Galaxy S23 Ultra','/images/galaxys23ultra_front_green_221122_2.webp','88881'),(3,'iPhone 14 128GB | Chính hãng VN/A','iPhone 14 Pro Max 128GB','/images/iphone-14-storage-select-202209-6-1inch-y889.webp','88882'),(4,'Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','Xiaomi Redmi Note 12','/images/_76666_7__3.webp','88883'),(5,'OPPO Find N2 Flip | Chính hãng VN/A','OPPO Find N2 Flip','/images/n2_flip_-_combo_product_-_black.webp','88884'),(6,'iPhone 12 64GB | Chính hãng VN/A','iPhone 12 64GB','/images/iphone12.webp','88885'),(7,'Xiaomi Redmi Note 12 4GB 128GB | Chính hãng VN/A','Xiaomi Redmi Note 12','/images/gtt_7766_3__1.webp','88886'),(8,'iPhone 11 64GB | Chính hãng VN/A','iPhone 11 64GB','/images/iphone11.webp','88887'),(9,'Samsung Galaxy Z Fold5 12GB 256GB','Samsung Galaxy Z Fold5','/images/galaxy-z-fold-5-xanh-1.webp','88888'),(10,'iPhone 14 Plus 128GB | Chính hãng VN/A','iPhone 14 Plus 512GB','/images/iphone14plus.webp','88889');
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
INSERT INTO `SmartPhone_Detail` VALUES (1,'black','/images/iphone15/iphone15promax/iphone15promaxBlack.webp','38990000','37990000'),(1,'white','/images/iphone15/iphone15promax/iphone15promaxWhite.webp','37490000','37990000'),(2,'black','/images/samsungs23/ultra/s23-ultra-black.webp','31990000','22990000'),(2,'white','/images/samsungs23/ultra/s23-ultra-white.webp','31290000','22590000'),(3,'black','/images/iphone14/promax/ip_14_promax_black.webp','29990000','26790000'),(3,'white','/images/iphone14/promax/ip_14_promax_white.webp','29690000','26790000'),(4,'black','/images/xiaomi_note12/xiaomi_note12_black.webp','5790000','4990000'),(4,'white','/images/xiaomi_note12/xiaomi_note12_white.webp','5290000','4970000'),(5,'black','/images/oppo_findN2/oppo_findN2_black.webp','19990000','18990000'),(5,'white','/images/oppo_findN2/oppo_findN2_white.webp','19990000','18990000'),(6,'black','/images/iphone12/iphone12_black.webp','15990000','13790000'),(6,'white','/images/iphone12/iphone12_white.webp','15290000','13790000'),(7,'black','/images/xiaomi_note12/xiaomi_note12_black.webp','4990000','4290000'),(7,'white','/images/xiaomi_note12/xiaomi_note12_white.webp','4390000','4090000'),(8,'black','/images/iphone11/iphone11_black.webp','11990000','10490000'),(8,'white','/images/iphone11/iphone11_white.webp','11090000','10550000'),(9,'black','/images/samsung_zfold5/samsung_zfold5_black.webp','40990000','33990000'),(9,'white','/images/samsung_zfold5/samsung_zfold5_white.webp','40790000','33790000'),(10,'black','/images/iphone14/plus/iphone14_black.webp','24990000','21290000'),(10,'white','/images/iphone14/plus/iphone14_white.webp','24690000','21290000');
/*!40000 ALTER TABLE `SmartPhone_Detail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-02 18:14:40
