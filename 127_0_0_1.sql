-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2020 at 01:12 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_pta`
--
CREATE DATABASE IF NOT EXISTS `test_pta` DEFAULT CHARACTER SET utf32 COLLATE utf32_general_ci;
USE `test_pta`;

-- --------------------------------------------------------

--
-- Table structure for table `pending`
--

CREATE TABLE `pending` (
  `id` varchar(12) NOT NULL,
  `penaddress` text DEFAULT NULL,
  `penstatus` text DEFAULT NULL,
  `delivere` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `pending`
--

INSERT INTO `pending` (`id`, `penaddress`, `penstatus`, `delivere`) VALUES
('100020003000', '12/34 Sathon Rd. Yannawa Bangkok 10100, Thailand\r\n', 'Delivery', 'in 3 days'),
('123456789012', '34/5-6 Soi Chareenraj 20 Charernraj Rd. Yannawa \r\nBangkok 10100, Thailand', 'Delivery', 'in 2 hours'),
('135790246802', '35/100 Noble Condo, Phayathai Rd. Bangkok, Thailand\r\n', 'Pickup', 'in 1 day');

-- --------------------------------------------------------

--
-- Table structure for table `scanned`
--

CREATE TABLE `scanned` (
  `id` varchar(12) NOT NULL,
  `scanaddress` text NOT NULL,
  `scanstatus` text NOT NULL,
  `delivere` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pending`
--
ALTER TABLE `pending`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `scanned`
--
ALTER TABLE `scanned`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
