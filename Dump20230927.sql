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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `smartphone_id` int(11) DEFAULT NULL,
  KEY `smartphone_id` (`smartphone_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`smartphone_id`) REFERENCES `smartPhone` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (3),(9);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smartPhone`
--

DROP TABLE IF EXISTS `smartPhone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `smartPhone` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `name_detail` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `link_white` varchar(255) DEFAULT NULL,
  `link_black` varchar(255) DEFAULT NULL,
  `price_left_black` int(11) DEFAULT NULL,
  `price_right_black` int(11) DEFAULT NULL,
  `price_left_white` int(11) DEFAULT NULL,
  `price_right_white` int(11) DEFAULT NULL,
  `ma_sp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smartPhone`
--

LOCK TABLES `smartPhone` WRITE;
/*!40000 ALTER TABLE `smartPhone` DISABLE KEYS */;
INSERT INTO `smartPhone` VALUES (1,'iPhone 15 Pro Max 256GB | Chính hãng VN/A','Iphone15 Promax','/images/iphone-15-pro-max_2__5.webp','/images/iphone15/iphone15promax/iphone15promaxWhite.webp','/images/iphone15/iphone15promax/iphone15promaxBlack.webp',38990000,37990000,37490000,37990000,'88880'),(2,'Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','Samsung Galaxy S23 Ultra','/images/galaxys23ultra_front_green_221122_2.webp','/images/samsungs23/ultra/s23-ultra-white.webp','/images/samsungs23/ultra/s23-ultra-black.webp',31990000,22990000,31290000,22590000,'88881'),(3,'iPhone 14 128GB | Chính hãng VN/A','iPhone 14 Pro Max 128GB','/images/iphone-14-storage-select-202209-6-1inch-y889.webp','/images/iphone14/promax/ip_14_promax_white.webp','/images/iphone14/promax/ip_14_promax_black.webp',29990000,26790000,29690000,26790000,'88882'),(4,'Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','Xiaomi Redmi Note 12','/images/_76666_7__3.webp','/images/xiaomi_note12/xiaomi_note12_white.webp','/images/xiaomi_note12/xiaomi_note12_black.webp',5790000,4990000,5290000,4970000,'88883'),(5,'OPPO Find N2 Flip | Chính hãng VN/A','OPPO Find N2 Flip','/images/n2_flip_-_combo_product_-_black.webp','/images/oppo_findN2/oppo_findN2_white.webp','/images/oppo_findN2/oppo_findN2_black.webp',19990000,18990000,19990000,18990000,'88884'),(6,'iPhone 12 64GB | Chính hãng VN/A','iPhone 12 64GB','/images/iphone12.webp','/images/iphone12/iphone12_white.webp','/images/iphone12/iphone12_black.webp',15990000,13790000,15290000,13790000,'88885'),(7,'Xiaomi Redmi Note 12 4GB 128GB | Chính hãng VN/A','Xiaomi Redmi Note 12','/images/gtt_7766_3__1.webp','/images/xiaomi_note12/xiaomi_note12_white.webp','/images/xiaomi_note12/xiaomi_note12_black.webp',4990000,4290000,4390000,4090000,'88886'),(8,'iPhone 11 64GB | Chính hãng VN/A','iPhone 11 64GB','/images/iphone11.webp','/images/iphone11/iphone11_white.webp','/images/iphone11/iphone11_black.webp',11990000,10490000,11090000,10550000,'88887'),(9,'Samsung Galaxy Z Fold5 12GB 256GB','Samsung Galaxy Z Fold5','/images/galaxy-z-fold-5-xanh-1.webp','/images/samsung_zfold5/samsung_zfold5_white.webp','/images/samsung_zfold5/samsung_zfold5_black.webp',40990000,33990000,40790000,33790000,'88888'),(10,'iPhone 14 Plus 128GB | Chính hãng VN/A','iPhone 14 Plus 512GB','/images/iphone14plus.webp','/images/iphone14/plus/iphone14_white.webp','/images/iphone14/plus/iphone14_black.webp',24990000,21290000,24690000,21290000,'88889');
/*!40000 ALTER TABLE `smartPhone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-27 17:41:48
