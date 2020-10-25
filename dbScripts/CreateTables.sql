USE [medicapp-db]
GO
/****** Object:  Table [dbo].[CategoriaElemento]    Script Date: 10/25/2020 12:17:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CategoriaElemento](
	[id] [int] NOT NULL,
	[descripcion] [varchar](250) NOT NULL,
 CONSTRAINT [PK_CategoriaElemento] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Direccion]    Script Date: 10/25/2020 12:17:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Direccion](
	[id] [int] NOT NULL,
	[usuarioId] [int] NOT NULL,
	[calle] [varchar](250) NOT NULL,
	[numero] [int] NOT NULL,
	[codigoPostal] [int] NOT NULL,
	[provincia] [varchar](250) NOT NULL,
 CONSTRAINT [PK_Direccion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Elemento]    Script Date: 10/25/2020 12:17:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Elemento](
	[id] [int] NOT NULL,
	[descripcion] [varchar](250) NOT NULL,
	[categoriaElementoId] [int] NOT NULL,
 CONSTRAINT [PK_Elemento] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EstadoOperacion]    Script Date: 10/25/2020 12:17:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EstadoOperacion](
	[id] [int] NOT NULL,
	[descripcion] [varchar](250) NOT NULL,
 CONSTRAINT [PK_EstadoOperacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Operacion]    Script Date: 10/25/2020 12:17:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Operacion](
	[id] [int] NOT NULL,
	[usuarioId] [int] NOT NULL,
	[elementoId] [int] NOT NULL,
	[estadoOperacionId] [int] NOT NULL,
	[tipoOperacionId] [int] NOT NULL,
	[fechaInicio] [datetime] NOT NULL,
	[fechaFin] [datetime] NULL,
	[comentarios] [varchar](250) NULL,
 CONSTRAINT [PK_Operacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OperacionMatch]    Script Date: 10/25/2020 12:17:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OperacionMatch](
	[id] [int] NOT NULL,
	[operacion1Id] [int] NOT NULL,
	[operacion2Id] [int] NOT NULL,
	[fechaInicio] [datetime] NOT NULL,
	[fechaFin] [datetime] NULL,
	[calificacion] [varchar](250) NULL,
 CONSTRAINT [PK_OperacionMatch] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoOperacion]    Script Date: 10/25/2020 12:17:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoOperacion](
	[id] [int] NOT NULL,
	[descripcion] [varchar](250) NOT NULL,
 CONSTRAINT [PK_TipoOperacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 10/25/2020 12:17:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[id] [int] NOT NULL,
	[descripcion] [varchar](250) NOT NULL,
	[mail] [varchar](250) NOT NULL,
	[password] [varchar](250) NOT NULL,
	[nombre] [varchar](250) NOT NULL,
	[apellido] [varchar](250) NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Direccion]  WITH CHECK ADD  CONSTRAINT [FK_Direccion_Usuario] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[Usuario] ([id])
GO
ALTER TABLE [dbo].[Direccion] CHECK CONSTRAINT [FK_Direccion_Usuario]
GO
ALTER TABLE [dbo].[Elemento]  WITH CHECK ADD  CONSTRAINT [FK_Elemento_CategoriaElemento] FOREIGN KEY([categoriaElementoId])
REFERENCES [dbo].[CategoriaElemento] ([id])
GO
ALTER TABLE [dbo].[Elemento] CHECK CONSTRAINT [FK_Elemento_CategoriaElemento]
GO
ALTER TABLE [dbo].[Operacion]  WITH CHECK ADD  CONSTRAINT [FK_Operacion_Elemento] FOREIGN KEY([elementoId])
REFERENCES [dbo].[Elemento] ([id])
GO
ALTER TABLE [dbo].[Operacion] CHECK CONSTRAINT [FK_Operacion_Elemento]
GO
ALTER TABLE [dbo].[Operacion]  WITH CHECK ADD  CONSTRAINT [FK_Operacion_EstadoOperacion] FOREIGN KEY([estadoOperacionId])
REFERENCES [dbo].[EstadoOperacion] ([id])
GO
ALTER TABLE [dbo].[Operacion] CHECK CONSTRAINT [FK_Operacion_EstadoOperacion]
GO
ALTER TABLE [dbo].[Operacion]  WITH CHECK ADD  CONSTRAINT [FK_Operacion_TipoOperacion] FOREIGN KEY([tipoOperacionId])
REFERENCES [dbo].[TipoOperacion] ([id])
GO
ALTER TABLE [dbo].[Operacion] CHECK CONSTRAINT [FK_Operacion_TipoOperacion]
GO
ALTER TABLE [dbo].[Operacion]  WITH CHECK ADD  CONSTRAINT [FK_Operacion_Usuario] FOREIGN KEY([usuarioId])
REFERENCES [dbo].[Usuario] ([id])
GO
ALTER TABLE [dbo].[Operacion] CHECK CONSTRAINT [FK_Operacion_Usuario]
GO
ALTER TABLE [dbo].[OperacionMatch]  WITH CHECK ADD  CONSTRAINT [FK_OperacionMatch_Operacion1] FOREIGN KEY([operacion1Id])
REFERENCES [dbo].[Operacion] ([id])
GO
ALTER TABLE [dbo].[OperacionMatch] CHECK CONSTRAINT [FK_OperacionMatch_Operacion1]
GO
ALTER TABLE [dbo].[OperacionMatch]  WITH CHECK ADD  CONSTRAINT [FK_OperacionMatch_Operacion2] FOREIGN KEY([operacion2Id])
REFERENCES [dbo].[Operacion] ([id])
GO
ALTER TABLE [dbo].[OperacionMatch] CHECK CONSTRAINT [FK_OperacionMatch_Operacion2]
GO
