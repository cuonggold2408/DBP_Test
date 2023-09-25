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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `link` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price_left` varchar(255) DEFAULT NULL,
  `price_right` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('/images/iphone-15-pro-max_2__5.webp','iPhone 15 Pro Max 256GB | Chính hãng VN/A','35.000.000d','34.999.999d',1),('/images/galaxys23ultra_front_green_221122_2.webp','Samsung Galaxy S23 Ultra 256GB | Chính hãng VN/A','23.590.000d','23.600.000d',2),('/images/iphone-14-storage-select-202209-6-1inch-y889.webp','iPhone 14 128GB | Chính hãng VN/A','18.790.000d','18.800.000d',3),('/images/_76666_7__3.webp','Xiaomi Redmi Note 12 8GB 128GB | Chính hãng VN/A','5.090.000d','5.100.000d',4),('/images/n2_flip_-_combo_product_-_black.webp','OPPO Find N2 Flip | Chính hãng VN/A','19.990.000d','20.000.000d',5),('/images/iphone12.webp','iPhone 12 64GB | Chính hãng VN/A','13.450.000d','15.990.000d',6),('/images/gtt_7766_3__1.webp','Xiaomi Redmi Note 12 4GB 128GB | Chính hãng VN/A','4.280.000d','4.990.000d',7),('/images/iphone11.webp','iPhone 11 64GB | Chính hãng VN/A','10.490.000d','11.990.000d',8),('/images/galaxy-z-fold-5-xanh-1.webp','Samsung Galaxy Z Fold5 12GB 256GB','34.990.000d','40.990.000d',9),('/images/iphone14plus.webp','iPhone 14 Plus 128GB | Chính hãng VN/A','21.290.000d','24.990.000d',10);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_item`
--

DROP TABLE IF EXISTS `product_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_item` (
  `myid` int(11) DEFAULT NULL,
  `name_detail` varchar(255) DEFAULT NULL,
  `name_main` varchar(255) DEFAULT NULL,
  `link_image2` varchar(255) DEFAULT NULL,
  `mso` varchar(255) DEFAULT NULL,
  `link_image1` varchar(255) DEFAULT NULL,
  KEY `myid` (`myid`),
  CONSTRAINT `product_item_ibfk_1` FOREIGN KEY (`myid`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_item`
--

LOCK TABLES `product_item` WRITE;
/*!40000 ALTER TABLE `product_item` DISABLE KEYS */;
INSERT INTO `product_item` VALUES (1,'Iphone15 Promax','iPhone 15 Pro Max 256GB | Chính hãng VN/A','/images/iphone15/iphone15promax/iphone15promaxWhite.webp','3400000004250','/images/iphone15/iphone15promax/iphone15promaxBlack.webp'),(2,'Samsung Galaxy S23 Ultra','Samsung Galaxy S23 Ultra 256GB','/images/samsungs23/ultra/s23-ultra-white.webp','88881','/images/samsungs23/ultra/s23-ultra-black.webp'),(3,'iPhone 14 Pro Max 128GB','iPhone 14 Pro Max 128GB | Chính hãng VN/A','/images/iphone14/promax/ip_14_promax_white.webp','88882','/images/iphone14/promax/ip_14_promax_black.webp'),(4,'Xiaomi Redmi Note 12','Xiaomi Redmi Note 12 128GB Chính hãng (BH19T)','/images/xiaomi_note12/xiaomi_note12_white.webp','88883','/images/xiaomi_note12/xiaomi_note12_black.webp'),(5,'OPPO Find N2 Flip','OPPO Find N2 Flip 256GB Chính Hãng','/images/oppo_findN2/oppo_findN2_white.webp','88884','/images/oppo_findN2/oppo_findN2_black.webp'),(6,'iPhone 12 64GB','iPhone 12 64GB Chính Hãng (VN/A)','/images/iphone12/iphone12_white.webp','88885','/images/iphone12/iphone12_black.webp'),(8,'iPhone 11 64GB','iPhone 11 64GB ','/images/iphone11/iphone11_white.webp','88887','/images/iphone11/iphone11_black.webp'),(10,'iPhone 14 Plus 512GB','iPhone 14 Plus 512GB Chính Hãng (VN/A)','/images/iphone14/plus/iphone14_white.webp','88889','/images/iphone14/plus/iphone14_black.webp'),(9,'Samsung Galaxy Z Fold5','Samsung Galaxy Z Fold5 5G 512GB Chính Hãng','/images/samsung_zfold5/samsung_zfold5_white.webp','88888','/images/samsung_zfold5/samsung_zfold5_black.webp'),(7,'Xiaomi Redmi Note 12','Xiaomi Redmi Note 12 128GB Chính hãng (BH19T)','/images/xiaomi_note12/xiaomi_note12_white.webp','88886','/images/xiaomi_note12/xiaomi_note12_black.webp');
/*!40000 ALTER TABLE `product_item` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-25 15:42:23
