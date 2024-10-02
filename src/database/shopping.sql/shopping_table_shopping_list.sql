
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping_list`
--

CREATE TABLE `shopping_list` (
  `id` varchar(100) NOT NULL,
  `value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`value`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `shopping_list`
--

INSERT INTO `shopping_list` (`id`, `value`) VALUES
('1ef804f7-acb4-6bd0-b7b3-8bb9a813269a', '{\"name\": \"Lista de Canasta básica\", \"id\": \"1ef804f7-acb4-6bd0-b7b3-8bb9a813269a\", \"completed\": false, \"completedAt\": 654321987}'),
('1ef80508-3995-6da0-a399-606c7bd390d8', '{\"id\": \"1ef80508-3995-6da0-a399-606c7bd390d8\", \"name\": \"Lista de Canasta básica\", \"modifiedDate\": \"2024-10-01 00:00:00.000\", \"field1\": 123, \"nuevCampo\": 159, \"nuevoCampo2\": \"Ejemplo nuevo\"}'),
('1ef80522-117d-6ba0-b419-65e0c11edad9', '{\"id\":\"1ef80522-117d-6ba0-b419-65e0c11edad9\",\"name\":\"Lista de Canasta básica\"}'),
('1ef80528-ea7c-6d10-8d78-40423c014610', '{\"id\":\"1ef80528-ea7c-6d10-8d78-40423c014610\",\"name\":\"Lista de Canasta básica\"}'),
('1ef80537-bad4-6a90-9c75-ae862072b629', '{\"id\":\"1ef80537-bad4-6a90-9c75-ae862072b629\",\"name\":\"Lista de Canasta básica\"}');
