-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-08-2023 a las 23:51:11
-- Versión del servidor: 5.7.43-log
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: ` club náutico`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `id_barcos`
--

CREATE TABLE `id_barcos` (
  `id_barcos` int(11) NOT NULL,
  `id_socios` int(11) NOT NULL,
  `Número_de_matrícula` varchar(20) COLLATE utf16_spanish_ci NOT NULL,
  `Nombre` varchar(50) COLLATE utf16_spanish_ci NOT NULL,
  `Número_de_amarre` int(11) NOT NULL,
  `Cuota_de_amarre` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `id_patrón`
--

CREATE TABLE `id_patrón` (
  `id_Patrón` int(11) NOT NULL,
  `Nombre` varchar(50) COLLATE utf16_spanish_ci NOT NULL,
  `Apellido` varchar(50) COLLATE utf16_spanish_ci NOT NULL,
  `Dirección` varchar(100) COLLATE utf16_spanish_ci NOT NULL,
  `Teléfono` varchar(15) COLLATE utf16_spanish_ci NOT NULL,
  `Email` varchar(100) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `id_salidas`
--

CREATE TABLE `id_salidas` (
  `id_salidas` int(11) NOT NULL,
  `id_barcos` int(11) NOT NULL,
  `Fecha_y_hora_de_salida` datetime NOT NULL,
  `Destino` varchar(100) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `id_socios`
--

CREATE TABLE `id_socios` (
  `id_socio` int(11) NOT NULL,
  `Nombre` varchar(50) COLLATE utf16_spanish_ci NOT NULL,
  `Apellido` varchar(50) COLLATE utf16_spanish_ci NOT NULL,
  `Dirección` varchar(100) COLLATE utf16_spanish_ci NOT NULL,
  `Teléfono` varchar(15) COLLATE utf16_spanish_ci NOT NULL,
  `Email` varchar(100) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `id_barcos`
--
ALTER TABLE `id_barcos`
  ADD PRIMARY KEY (`id_barcos`),
  ADD KEY `fk_socios_barcos` (`id_socios`);

--
-- Indices de la tabla `id_patrón`
--
ALTER TABLE `id_patrón`
  ADD PRIMARY KEY (`id_Patrón`);

--
-- Indices de la tabla `id_salidas`
--
ALTER TABLE `id_salidas`
  ADD PRIMARY KEY (`id_salidas`),
  ADD KEY `fk_barcos_salidas` (`id_barcos`);

--
-- Indices de la tabla `id_socios`
--
ALTER TABLE `id_socios`
  ADD PRIMARY KEY (`id_socio`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `id_barcos`
--
ALTER TABLE `id_barcos`
  ADD CONSTRAINT `fk_socios_barcos` FOREIGN KEY (`id_socios`) REFERENCES `id_socios` (`id_socio`);

--
-- Filtros para la tabla `id_patrón`
--
ALTER TABLE `id_patrón`
  ADD CONSTRAINT `fk_Patrones_Salidas` FOREIGN KEY (`id_Patrón`) REFERENCES `id_salidas` (`id_salidas`);

--
-- Filtros para la tabla `id_salidas`
--
ALTER TABLE `id_salidas`
  ADD CONSTRAINT `fk_Patron_salidas` FOREIGN KEY (`id_salidas`) REFERENCES `id_patrón` (`id_Patrón`),
  ADD CONSTRAINT `fk_barcos_salidas` FOREIGN KEY (`id_barcos`) REFERENCES `id_barcos` (`id_barcos`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
