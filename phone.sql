-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2016 at 09:22 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7
-- Created By Eduardo Santiago
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `phone`
--

-- --------------------------------------------------------

--
-- Table structure for table `android`
--

CREATE TABLE IF NOT EXISTS `android` (
  `android_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_id` int(11) NOT NULL,
  `os` varchar(100) NOT NULL,
  `ui` varchar(100) NOT NULL,
  PRIMARY KEY (`android_id`),
  KEY `FK_android_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `android`
--

INSERT INTO `android` (`android_id`, `phone_id`, `os`, `ui`) VALUES
(1, 1, 'Android 3.0', 'Honeycomb'),
(2, 2, 'Android 3.0', 'Android'),
(3, 3, 'Android 2.2', 'MOTOBLUR');

-- --------------------------------------------------------

--
-- Table structure for table `availability`
--

CREATE TABLE IF NOT EXISTS `availability` (
  `availability_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_id` int(11) NOT NULL,
  `list` varchar(200) NOT NULL,
  PRIMARY KEY (`availability_id`),
  KEY `FK_availability_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `availability`
--

INSERT INTO `availability` (`availability_id`, `phone_id`, `list`) VALUES
(1, 1, ''),
(2, 2, 'Verizon'),
(3, 3, 'AT&T');

-- --------------------------------------------------------

--
-- Table structure for table `battery`
--

CREATE TABLE IF NOT EXISTS `battery` (
  `battery_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_id` int(11) NOT NULL,
  `standbyTime` varchar(200) NOT NULL,
  `talkTime` varchar(200) NOT NULL,
  `type` varchar(200) NOT NULL,
  PRIMARY KEY (`battery_id`),
  KEY `FK_battery_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `battery`
--

INSERT INTO `battery` (`battery_id`, `phone_id`, `standbyTime`, `talkTime`, `type`) VALUES
(1, 1, '336 hours', '24 hours', 'Other ( mAH)'),
(2, 2, '336 hours', '24 hours', 'Other (3250 mAH)'),
(3, 3, '400 hours', '5 hours', 'Lithium Ion (Li-Ion) (1930 mAH)');

-- --------------------------------------------------------

--
-- Table structure for table `camera`
--

CREATE TABLE IF NOT EXISTS `camera` (
  `camera_id` int(11) NOT NULL AUTO_INCREMENT,
  `features` varchar(200) NOT NULL,
  `primary` varchar(200) NOT NULL,
  `phone_id` int(11) NOT NULL,
  PRIMARY KEY (`camera_id`),
  KEY `FK_camera_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `camera`
--

INSERT INTO `camera` (`camera_id`, `features`, `primary`, `phone_id`) VALUES
(1, 'Flash,Video', '5.0 megapixels', 1),
(2, 'Flash,Video', '5.0 megapixels', 2),
(3, '', '', 3);

-- --------------------------------------------------------

--
-- Table structure for table `connectivity`
--

CREATE TABLE IF NOT EXISTS `connectivity` (
  `connectivity_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_id` int(11) NOT NULL,
  `bluetooth` varchar(200) NOT NULL,
  `cell` varchar(200) NOT NULL,
  `gps` varchar(100) NOT NULL,
  `infrared` varchar(100) NOT NULL,
  `wifi` varchar(100) NOT NULL,
  PRIMARY KEY (`connectivity_id`),
  KEY `FK_connectivity_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `connectivity`
--

INSERT INTO `connectivity` (`connectivity_id`, `phone_id`, `bluetooth`, `cell`, `gps`, `infrared`, `wifi`) VALUES
(1, 1, 'Bluetooth 2.1', '', 'true', 'false', '802.11 b g n'),
(2, 2, 'Bluetooth 2.1', 'CDMA 800 1900 LTE 700, Rx diversity in all bands', 'true', 'false', '802.11 a b g n'),
(3, 3, 'Bluetooth 2.1', 'WCDMA 850 1900 2100, GSM 850 900 1800 1900, HSDPA 14Mbps (Category 10) Edge Class 12, GPRS Class 12, eCompass, AGPS', 'true', 'false', '802.11 a b g n');

-- --------------------------------------------------------

--
-- Table structure for table `display`
--

CREATE TABLE IF NOT EXISTS `display` (
  `display_id` int(11) NOT NULL AUTO_INCREMENT,
  `screenResolution` varchar(200) NOT NULL,
  `screenSize` varchar(200) NOT NULL,
  `touchScreen` varchar(200) NOT NULL,
  `phone_id` int(11) NOT NULL,
  PRIMARY KEY (`display_id`),
  KEY `FK_display_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `display`
--

INSERT INTO `display` (`display_id`, `screenResolution`, `screenSize`, `touchScreen`, `phone_id`) VALUES
(1, 'WXGA 1200 x 800', '10.1 inches', 'true', 1),
(2, 'WXGA 1200 x 800', '10.1 inches', 'true', 2),
(5, 'QHD 960 x 540', '4.0 inches', 'true', 3);

-- --------------------------------------------------------

--
-- Table structure for table `hardware`
--

CREATE TABLE IF NOT EXISTS `hardware` (
  `hardware_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_id` int(11) NOT NULL,
  `accelerometer` varchar(200) NOT NULL,
  `audioJack` varchar(200) NOT NULL,
  `cpu` varchar(200) NOT NULL,
  `fmRadio` varchar(200) NOT NULL,
  `physicalKeyboard` varchar(200) NOT NULL,
  `usb` varchar(200) NOT NULL,
  PRIMARY KEY (`hardware_id`),
  KEY `FK_hardware_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `hardware`
--

INSERT INTO `hardware` (`hardware_id`, `phone_id`, `accelerometer`, `audioJack`, `cpu`, `fmRadio`, `physicalKeyboard`, `usb`) VALUES
(1, 1, 'true', '3.5mm', '1 GHz Dual Core Tegra 2', 'false', 'false', 'USB 2.0'),
(2, 2, 'true', '3.5mm', '1 GHz Dual Core Tegra 2', 'false', 'false', 'USB 2.0'),
(3, 3, 'true', '3.5mm', '1 GHz Dual Core', 'false', 'false', 'USB 2.0');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `images_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_id` int(11) NOT NULL,
  `list` text NOT NULL,
  PRIMARY KEY (`images_id`),
  KEY `FK_images_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`images_id`, `phone_id`, `list`) VALUES
(1, 1, 'img/phones/motorola-xoom-with-wi-fi.0.jpg,img/phones/motorola-xoom-with-wi-fi.1.jpg,img/phones/motorola-xoom-with-wi-fi.2.jpg,img/phones/motorola-xoom-with-wi-fi.3.jpg,img/phones/motorola-xoom-with-wi-fi.4.jpg,img/phones/motorola-xoom-with-wi-fi.5.jpg'),
(2, 2, 'img/phones/motorola-xoom.0.jpg,img/phones/motorola-xoom.1.jpg,img/phones/motorola-xoom.2.jpg'),
(3, 3, 'img/phones/motorola-atrix-4g.0.jpg,img/phones/motorola-atrix-4g.1.jpg,img/phones/motorola-atrix-4g.2.jpg,img/phones/motorola-atrix-4g.3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `phone`
--

CREATE TABLE IF NOT EXISTS `phone` (
  `phone_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `name` varchar(200) NOT NULL,
  `additionalFeatures` text NOT NULL,
  `age` int(10) unsigned NOT NULL,
  `imageUrl` text,
  `snippet` text,
  PRIMARY KEY (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `phone`
--

INSERT INTO `phone` (`phone_id`, `id`, `description`, `name`, `additionalFeatures`, `age`, `imageUrl`, `snippet`) VALUES
(1, 'motorola-xoom-with-wi-fi', 'Motorola XOOM™ with Wi-Fi Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’l', 'Motorola XOOM™ with Wi-Fi', 'Sensors: proximity, ambient light, barometer, gyroscope', 0, 'img/phones/motorola-xoom-with-wi-fi.0.jpg', 'The Next, Next Generation\\r\\n\\r\\nExperience the future with Motorola XOOM with Wi-Fi, the world''s first tablet powered by Android 3.0 (Honeycomb).'),
(2, 'motorola-xoom', 'MOTOROLA XOOM has a super-powerful dual-core processor and Android\\u2122 3.0 (Honeycomb) \\u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.', 'MOTOROLA XOOM\\u2122', 'Front-facing camera. Sensors: proximity, ambient light, barometer, gyroscope.', 1, 'img/phones/motorola-xoom.0.jpg', 'The Next, Next Generation\\n\\nExperience the future with MOTOROLA XOOM, the world''s first tablet powered by Android 3.0 (Honeycomb).'),
(3, 'motorola-atrix-4g', 'MOTOROLA ATRIX 4G gives you dual-core processing power and the revolutionary webtop application. With webtop and a compatible Motorola docking station, sold separately, you can surf the Internet with a full Firefox browser, create and edit docs, or access multimedia on a large screen almost anywhere.', 'MOTOROLA ATRIX\\u2122 4G', 'Front-facing camera. Sensors: proximity, ambient light, barometer, gyroscope.', 2, 'img/phones/motorola-atrix-4g.0.jpg', 'MOTOROLA ATRIX 4G the world''s most powerful smartphone.');

-- --------------------------------------------------------

--
-- Table structure for table `size_weight`
--

CREATE TABLE IF NOT EXISTS `size_weight` (
  `size_weight_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_id` int(11) NOT NULL,
  `dimensions` text NOT NULL,
  `weight` varchar(200) NOT NULL,
  PRIMARY KEY (`size_weight_id`),
  KEY `FK_size_weight_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `size_weight`
--

INSERT INTO `size_weight` (`size_weight_id`, `phone_id`, `dimensions`, `weight`) VALUES
(1, 1, '249.1 mm width,167.8 mm height,12.9 mm depth', '708.0 grams'),
(2, 2, '249.0 mm width,168.0 mm height,12.7 mm depth', '726.0 grams');

-- --------------------------------------------------------

--
-- Table structure for table `storage`
--

CREATE TABLE IF NOT EXISTS `storage` (
  `storage_id` int(11) NOT NULL AUTO_INCREMENT,
  `phone_id` int(11) NOT NULL,
  `flash` varchar(100) NOT NULL,
  `ram` varchar(100) NOT NULL,
  PRIMARY KEY (`storage_id`),
  KEY `FK_storage_1` (`phone_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `storage`
--

INSERT INTO `storage` (`storage_id`, `phone_id`, `flash`, `ram`) VALUES
(1, 1, '2000MB', '1000MB'),
(2, 2, '32000MB', '1000MB');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
