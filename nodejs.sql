/*
SQLyog Community v11.0 (64 bit)
MySQL - 5.6.25 : Database - nodejs
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`nodejs` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `nodejs`;

/*Table structure for table `customer` */

DROP TABLE IF EXISTS `customer`;

CREATE TABLE `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `customer` */

insert  into `customer`(`id`,`name`,`address`,`email`,`phone`) values (1,'Nadya Eka','Jl. Ciwidey no 20','nadya@yahoo.com','086454743743'),(2,'Amali','Jl. kemandoran no 10 Jakarta','amalia@langit.com','03937263623'),(3,'Angel ','Jl. Ciledug no 45A. tanggerang','angel@gmail.com','082271626121'),(4,'Ujang','Jl. ribut no 90 A','ujang@gmail.com','07846352532'),(5,'Memet','Blok cepu no 14. Bandung','memet@ongkek.com','038372636232'),(6,'Agung','Jl st Petersburg no 34. Russia','agung@yahoo.com','038373273262'),(11,'Khokon','South Badda,Gulsan-01,Dhaka','khokon_85seu@hotmail.com','01719347580');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
