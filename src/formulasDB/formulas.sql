-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 22, 2018 at 08:07 PM
-- Server version: 5.7.23-0ubuntu0.18.04.1
-- PHP Version: 5.6.38-2+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `formulas`
--

-- --------------------------------------------------------

--
-- Table structure for table `kinematics`
--

CREATE TABLE `kinematics` (
  `id` int(10) UNSIGNED NOT NULL,
  `sign` varchar(5) NOT NULL,
  `formula` varchar(80) NOT NULL,
  `description` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kinematics`
--

INSERT INTO `kinematics` (`id`, `sign`, `formula`, `description`) VALUES
(1, 'S', 'V*t', 'Путь механического движения'),
(2, 'V', 'S/t', 'Скорость механического движения'),
(3, 'a', '(V-V0)/t', 'Равномерное движение'),
(4, 'V', 'V0+a*t', 'Равноускоренное движение (Скорость)'),
(5, 'S', 'V*t+((a*t*t)/2)', 'Равноускоренное движение (Путь)'),
(6, 'V', 'a*t', 'Скорость при ускорении и времени'),
(7, 'V', 'V0-g*t', 'Скорость тела, брошенного вертикально вверх'),
(8, 'V', 'g*t', 'Скорость свободно падающего тела'),
(9, 'a', '(w*w)/R', 'Центростремительное ускорение'),
(10, 'T', 't/N', 'Период вращения при времени и количестве вращений'),
(11, 'T', '(2*pi*R)/N', 'Период вращения при радиусе и линейной скорости'),
(12, 'n', '1/T', 'Частота');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kinematics`
--
ALTER TABLE `kinematics`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kinematics`
--
ALTER TABLE `kinematics`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
