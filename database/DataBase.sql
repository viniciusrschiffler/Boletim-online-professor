-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Jul-2021 às 21:28
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tcc`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE `aluno` (
  `id` int(11) NOT NULL,
  `id_turma` int(11) NOT NULL,
  `nome` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`id`, `id_turma`, `nome`) VALUES
(27, 1, 'Jõao'),
(28, 1, 'Marcos'),
(29, 1, 'Júlia'),
(30, 3, 'Sarah'),
(31, 3, 'Guilherme'),
(32, 3, 'Alfredo'),
(34, 4, 'Guilherme B'),
(35, 4, 'Lucas'),
(36, 4, 'Larissa'),
(37, 5, 'Joaquim'),
(38, 5, 'Paulo'),
(39, 5, 'Adriano'),
(40, 6, 'Vinicius'),
(41, 6, 'Caio'),
(42, 6, 'Pedro'),
(43, 6, 'Briza'),
(44, 6, 'Renata'),
(45, 6, 'Yure'),
(46, 6, 'Ana Beatriz'),
(47, 6, 'Kailane');

-- --------------------------------------------------------

--
-- Estrutura da tabela `disciplina`
--

CREATE TABLE `disciplina` (
  `id` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `sigla` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `nome` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `disciplina`
--

INSERT INTO `disciplina` (`id`, `id_funcionario`, `sigla`, `nome`) VALUES
(1, 1, 'LP 1', 'Linguagem de Programação 1'),
(2, 1, 'MM', 'Montagem e Manutenção'),
(3, 7, 'LG', 'Lógica'),
(4, 10, 'APL 1', 'Aplicativos 1'),
(5, 4, 'OC', 'Organização de computadores'),
(6, 4, 'FW 1', 'Ferramentas da Web 1'),
(7, 8, 'MD 1', 'Modelagem de dados 1'),
(8, 1, 'REDES', 'Redes'),
(9, 7, 'ESTAT', 'Estatística'),
(10, 1, 'LP 2', 'Linguagem de programação 2'),
(11, 6, 'FW 2', 'Ferramentas da Web 2'),
(12, 8, 'APL 2', 'Aplicativos 2'),
(13, 6, 'MD 2', 'Modelagem de dados 2'),
(14, 4, 'PRH', 'Psicologia das Relações Humanas'),
(15, 4, 'PF', 'Projeto Final'),
(16, 9, 'PDM', 'Programação de Dispositivos Móveis'),
(17, 5, 'PW-MS', 'Programação Web - Modelagem de Sistemas'),
(18, 9, 'LP 3', 'Linguagem de Programação 3'),
(19, 6, 'APL 3', 'Aplicativos 3');

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionario`
--

CREATE TABLE `funcionario` (
  `id` int(11) NOT NULL,
  `id_funcao` int(11) NOT NULL,
  `nome` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email_institucional` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `data_nasc` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `funcionario`
--

INSERT INTO `funcionario` (`id`, `id_funcao`, `nome`, `email_institucional`, `data_nasc`) VALUES
(1, 1, 'Alexandre', 'ale@gmail.com', '1970-05-15'),
(4, 1, 'Joseane', 'jose@gmail.com', '1984-05-13'),
(5, 1, 'Roni', 'roni@gmail.com', '1984-05-31'),
(6, 1, 'Patricia', 'paty@gmail.com', '1984-05-16'),
(7, 1, 'Rosemberg', 'rose@gmail.com', '1984-05-03'),
(8, 1, 'Luciana', 'Lu@gmail.com', '1984-05-07'),
(9, 1, 'Adriano', 'adri@gmail.com', '1984-05-10'),
(10, 1, 'Alan', 'alan@gmail.con', '2021-06-25');

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcão`
--

CREATE TABLE `funcão` (
  `id` int(11) NOT NULL,
  `funcao` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `funcão`
--

INSERT INTO `funcão` (`id`, `funcao`) VALUES
(1, 'Professor');

-- --------------------------------------------------------

--
-- Estrutura da tabela `historico`
--

CREATE TABLE `historico` (
  `id` int(11) NOT NULL,
  `id_turma` int(11) NOT NULL,
  `id_disciplina` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `nota_av1` float DEFAULT NULL,
  `nota_av2` float DEFAULT NULL,
  `freq1` float DEFAULT NULL,
  `freq2` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `historico`
--

INSERT INTO `historico` (`id`, `id_turma`, `id_disciplina`, `id_aluno`, `nota_av1`, `nota_av2`, `freq1`, `freq2`) VALUES
(78, 1, 1, 27, 1, NULL, 4, 0),
(79, 1, 2, 27, 0, 0, 0, 0),
(80, 1, 3, 27, 0, 0, 0, 0),
(81, 1, 4, 27, 0, 0, 0, 0),
(82, 1, 5, 27, 0, 0, 0, 0),
(83, 1, 6, 27, 0, 0, 0, 0),
(84, 1, 7, 27, 0, 0, 0, 0),
(85, 1, 1, 28, NULL, 9, NULL, 0),
(86, 1, 2, 28, 0, 0, 0, 0),
(87, 1, 3, 28, 0, 0, 0, 0),
(88, 1, 4, 28, 0, 0, 0, 0),
(89, 1, 5, 28, 0, 0, 0, 0),
(90, 1, 6, 28, 0, 0, 0, 0),
(91, 1, 7, 28, 0, 0, 0, 0),
(92, 1, 1, 29, 5, NULL, 8, 6),
(93, 1, 2, 29, 0, 0, 0, 0),
(94, 1, 3, 29, 0, 0, 0, 0),
(95, 1, 4, 29, 0, 0, 0, 0),
(96, 1, 5, 29, 0, 0, 0, 0),
(97, 1, 6, 29, 0, 0, 0, 0),
(98, 1, 7, 29, 0, 0, 0, 0),
(99, 3, 8, 30, 0, 0, 9, 0),
(100, 3, 9, 30, 0, 0, 0, 0),
(101, 3, 10, 30, 0, 0, 0, 0),
(102, 3, 11, 30, 0, 0, 0, 0),
(103, 3, 12, 30, 0, 0, 0, 0),
(104, 3, 13, 30, 0, 0, 0, 0),
(105, 3, 8, 31, 0, 0, 0, 0),
(106, 3, 9, 31, 0, 0, 0, 0),
(107, 3, 10, 31, 0, 0, 0, 0),
(108, 3, 11, 31, 0, 0, 0, 0),
(109, 3, 12, 31, 0, 0, 0, 0),
(110, 3, 13, 31, 0, 0, 0, 0),
(111, 3, 8, 32, 0, 0, 0, 0),
(112, 3, 9, 32, 0, 0, 0, 0),
(113, 3, 10, 32, 0, 0, 0, 0),
(114, 3, 11, 32, 0, 0, 0, 0),
(115, 3, 12, 32, 0, 0, 0, 0),
(116, 3, 13, 32, 0, 0, 0, 0),
(123, 4, 8, 34, 8, 7, 98, 0),
(124, 4, 9, 34, 0, 0, 0, 0),
(125, 4, 10, 34, 10, 0, 8, 0),
(126, 4, 11, 34, 0, 0, 0, 0),
(127, 4, 12, 34, 0, 0, 0, 0),
(128, 4, 13, 34, 0, 0, 0, 0),
(129, 4, 8, 35, 0, 0, 0, 0),
(130, 4, 9, 35, 0, 0, 0, 0),
(131, 4, 10, 35, 0, 0, 0, 0),
(132, 4, 11, 35, 0, 0, 0, 0),
(133, 4, 12, 35, 0, 0, 0, 0),
(134, 4, 13, 35, 0, 0, 0, 0),
(135, 4, 8, 36, 0, 0, 0, 0),
(136, 4, 9, 36, 0, 0, 0, 0),
(137, 4, 10, 36, 0, 0, 0, 0),
(138, 4, 11, 36, 0, 0, 0, 0),
(139, 4, 12, 36, 0, 0, 0, 0),
(140, 4, 13, 36, 0, 0, 0, 0),
(141, 5, 14, 37, 0, 0, 0, 0),
(142, 5, 15, 37, 0, 0, 0, 0),
(143, 5, 16, 37, 0, 0, 0, 0),
(144, 5, 17, 37, 0, 0, 0, 0),
(145, 5, 18, 37, 0, 0, 0, 0),
(146, 5, 19, 37, 0, 0, 0, 0),
(147, 5, 14, 38, 0, 0, 0, 0),
(148, 5, 15, 38, 0, 0, 0, 0),
(149, 5, 16, 38, 0, 0, 0, 0),
(150, 5, 17, 38, 0, 0, 0, 0),
(151, 5, 18, 38, 0, 0, 0, 0),
(152, 5, 19, 38, 0, 0, 0, 0),
(153, 5, 14, 39, 0, 0, 0, 0),
(154, 5, 15, 39, 0, 0, 0, 0),
(155, 5, 16, 39, 0, 0, 0, 0),
(156, 5, 17, 39, 0, 0, 0, 0),
(157, 5, 18, 39, 0, 0, 0, 0),
(158, 5, 19, 39, 0, 0, 0, 0),
(159, 6, 14, 40, 0, 0, 0, 0),
(160, 6, 15, 40, 10, 10, 50, 50),
(161, 6, 16, 40, 0, 0, 0, 0),
(162, 6, 17, 40, 0, 0, 0, 0),
(163, 6, 18, 40, 0, 0, 0, 0),
(164, 6, 19, 40, 0, 0, 0, 0),
(165, 6, 14, 41, 0, 0, 0, 0),
(166, 6, 15, 41, 10, 10, 50, 50),
(167, 6, 16, 41, 0, 0, 0, 0),
(168, 6, 17, 41, 0, 0, 0, 0),
(169, 6, 18, 41, 0, 0, 0, 0),
(170, 6, 19, 41, 0, 0, 0, 0),
(171, 6, 14, 42, 0, 0, 0, 0),
(172, 6, 15, 42, 10, 10, 50, 50),
(173, 6, 16, 42, 0, 0, 0, 0),
(174, 6, 17, 42, 0, 0, 0, 0),
(175, 6, 18, 42, 0, 0, 0, 0),
(176, 6, 19, 42, 0, 0, 0, 0),
(177, 6, 14, 43, 0, 0, 0, 0),
(178, 6, 15, 43, 10, 10, 0, 0),
(179, 6, 16, 43, 0, 0, 0, 0),
(180, 6, 17, 43, 0, 0, 0, 0),
(181, 6, 18, 43, 0, 0, 0, 0),
(182, 6, 19, 43, 0, 0, 0, 0),
(183, 6, 14, 44, 0, 0, 0, 0),
(184, 6, 15, 44, -1, -1, -1, -1),
(185, 6, 16, 44, 0, 0, 0, 0),
(186, 6, 17, 44, 0, 0, 0, 0),
(187, 6, 18, 44, 0, 0, 0, 0),
(188, 6, 19, 44, 0, 0, 0, 0),
(189, 6, 14, 45, 0, 0, 0, 0),
(190, 6, 15, 45, -1, -1, -1, -1),
(191, 6, 16, 45, 0, 0, 0, 0),
(192, 6, 17, 45, 0, 0, 0, 0),
(193, 6, 18, 45, 0, 0, 0, 0),
(194, 6, 19, 45, 0, 0, 0, 0),
(195, 6, 14, 46, 0, 0, 0, 0),
(196, 6, 15, 46, 8, -1, 76, -1),
(197, 6, 16, 46, 0, 0, 0, 0),
(198, 6, 17, 46, 0, 0, 0, 0),
(199, 6, 18, 46, 0, 0, 0, 0),
(200, 6, 19, 46, 0, 0, 0, 0),
(201, 6, 14, 47, 0, 0, 0, 0),
(202, 6, 15, 47, -1, 10, -1, 100),
(203, 6, 16, 47, 0, 0, 0, 0),
(204, 6, 17, 47, 0, 0, 0, 0),
(205, 6, 18, 47, 0, 0, 0, 0),
(206, 6, 19, 47, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `id_funcionario` int(11) NOT NULL,
  `login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `senha` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `login`
--

INSERT INTO `login` (`id`, `id_funcionario`, `login`, `senha`) VALUES
(1, 1, 'ale', '123'),
(4, 4, 'jose', '123'),
(5, 5, 'roni', '123'),
(6, 6, 'paty', '123'),
(7, 7, 'rose', '123'),
(8, 8, 'lu', '123'),
(9, 9, 'adri', '123'),
(10, 10, 'alan', '123');

-- --------------------------------------------------------

--
-- Estrutura da tabela `periodo`
--

CREATE TABLE `periodo` (
  `id` int(11) NOT NULL,
  `id_disciplina` int(11) NOT NULL,
  `id_turma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `periodo`
--

INSERT INTO `periodo` (`id`, `id_disciplina`, `id_turma`) VALUES
(1, 1, 1),
(2, 1, 2),
(4, 2, 1),
(5, 2, 2),
(6, 3, 1),
(7, 3, 2),
(8, 4, 1),
(9, 4, 2),
(10, 5, 1),
(11, 5, 2),
(12, 6, 1),
(13, 6, 2),
(14, 7, 1),
(15, 7, 2),
(16, 8, 3),
(17, 8, 4),
(18, 9, 3),
(19, 9, 4),
(20, 10, 3),
(21, 10, 4),
(22, 11, 3),
(23, 11, 4),
(24, 12, 3),
(25, 12, 4),
(26, 13, 3),
(27, 13, 4),
(29, 14, 5),
(30, 14, 6),
(31, 15, 5),
(32, 15, 6),
(33, 16, 5),
(34, 16, 6),
(35, 17, 5),
(36, 17, 6),
(37, 18, 5),
(38, 18, 6),
(39, 19, 5),
(40, 19, 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `periodo_avaliativo`
--

CREATE TABLE `periodo_avaliativo` (
  `id` int(11) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_fim` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `periodo_avaliativo`
--

INSERT INTO `periodo_avaliativo` (`id`, `data_inicio`, `data_fim`) VALUES
(1, '2021-07-03', '2021-07-10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `semestre`
--

CREATE TABLE `semestre` (
  `id` int(11) NOT NULL,
  `semestre` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `dt_inicio` date NOT NULL,
  `dt_fim` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `semestre`
--

INSERT INTO `semestre` (`id`, `semestre`, `dt_inicio`, `dt_fim`) VALUES
(1, '1º', '2020-02-05', '2020-07-01'),
(2, '2º', '2020-07-06', '2020-12-11'),
(3, '3º', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `turma`
--

CREATE TABLE `turma` (
  `id` int(11) NOT NULL,
  `id_semestre` int(11) NOT NULL,
  `nomeclatura` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `turno` enum('M','T') COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `turma`
--

INSERT INTO `turma` (`id`, `id_semestre`, `nomeclatura`, `turno`) VALUES
(1, 1, '1101', 'M'),
(2, 1, '1201', 'T'),
(3, 2, '2101', 'M'),
(4, 2, '2201', 'T'),
(5, 3, '3101', 'M'),
(6, 3, '3201', 'T');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_turma` (`id_turma`) USING BTREE;

--
-- Índices para tabela `disciplina`
--
ALTER TABLE `disciplina`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_funcionario` (`id_funcionario`);

--
-- Índices para tabela `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_funcao` (`id_funcao`);

--
-- Índices para tabela `funcão`
--
ALTER TABLE `funcão`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `historico`
--
ALTER TABLE `historico`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_disciplina` (`id_disciplina`),
  ADD KEY `fk_id_aluno` (`id_aluno`),
  ADD KEY `fk_id_turma` (`id_turma`);

--
-- Índices para tabela `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_funcionario` (`id_funcionario`);

--
-- Índices para tabela `periodo`
--
ALTER TABLE `periodo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_disciplina` (`id_disciplina`),
  ADD KEY `fk_id_turma` (`id_turma`);

--
-- Índices para tabela `periodo_avaliativo`
--
ALTER TABLE `periodo_avaliativo`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `semestre`
--
ALTER TABLE `semestre`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_id_semestre` (`id_semestre`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de tabela `disciplina`
--
ALTER TABLE `disciplina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de tabela `funcionario`
--
ALTER TABLE `funcionario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `funcão`
--
ALTER TABLE `funcão`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `historico`
--
ALTER TABLE `historico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=207;

--
-- AUTO_INCREMENT de tabela `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `periodo`
--
ALTER TABLE `periodo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de tabela `periodo_avaliativo`
--
ALTER TABLE `periodo_avaliativo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `semestre`
--
ALTER TABLE `semestre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `turma`
--
ALTER TABLE `turma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `aluno`
--
ALTER TABLE `aluno`
  ADD CONSTRAINT `aluno_ibfk_1` FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `disciplina`
--
ALTER TABLE `disciplina`
  ADD CONSTRAINT `disciplina_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `funcionario`
--
ALTER TABLE `funcionario`
  ADD CONSTRAINT `funcionario_ibfk_1` FOREIGN KEY (`id_funcao`) REFERENCES `funcão` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `historico`
--
ALTER TABLE `historico`
  ADD CONSTRAINT `historico_ibfk_1` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historico_ibfk_2` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `funcionario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `periodo`
--
ALTER TABLE `periodo`
  ADD CONSTRAINT `periodo_ibfk_1` FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `periodo_ibfk_2` FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `turma`
--
ALTER TABLE `turma`
  ADD CONSTRAINT `turma_ibfk_1` FOREIGN KEY (`id_semestre`) REFERENCES `semestre` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
