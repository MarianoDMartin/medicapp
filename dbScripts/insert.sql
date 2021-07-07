USE [medicapp-db]
GO

INSERT INTO Usuario(email, password, nombre, apellido, calle, numero, codigoPostal, provincia, telefono, telefono2)
VALUES('mariano@gmail.com', '123456', 'Mariano Daniel', 'Martin', 'Manuel Ugarte', '3221', '1428', 'Buenos Aires', '1166666666', '1155555555')
GO

INSERT INTO Usuario(email, password, nombre, apellido, calle, numero, codigoPostal, provincia, telefono, telefono2)
VALUES('gabriel@gmail.com', '123456', 'Gabriel Ignacio', 'Ferreira', 'Calle Falsa', '123', '1111', 'La Pampa', '1111111111', '2222222222')
GO

INSERT INTO CategoriaElemento(descripcion)
VALUES('Ortopedia')
GO

INSERT INTO Elemento(descripcion,categoriaElementoId,imagen)
VALUES('Muletas', 1, 'https://drive.google.com/uc?export=view&id=1CGrG0c-Ddl4AIpbSOWHhr7wvI0tKe4Bu')
GO

INSERT INTO Elemento(descripcion,categoriaElementoId,imagen)
VALUES('Silla de Ruedas', 1, 'https://drive.google.com/uc?export=view&id=1rv4ZtZCv4XVN8-xOwRzb-GObpXq623YB')
GO

INSERT INTO EstadoOperacion(descripcion)
VALUES('Activa')
GO

INSERT INTO TipoOperacion(descripcion)
VALUES('pedido')
GO

INSERT INTO TipoOperacion(descripcion)
VALUES('donacion')
GO

INSERT INTO Operacion(usuarioId,elementoId,estadoOperacionId,tipoOperacionId,fechaInicio,comentarios)
VALUES (1,1,1,1,'20120618 10:34:09 AM','Necesito 2 muletas urgente')
GO

INSERT INTO Operacion(usuarioId,elementoId,estadoOperacionId,tipoOperacionId,fechaInicio,comentarios)
VALUES (2,1,1,1,'20120616 10:34:09 AM','Necesito 1 muleta')
GO

INSERT INTO Operacion(usuarioId,elementoId,estadoOperacionId,tipoOperacionId,fechaInicio,comentarios)
VALUES (1,1,1,1,'20120614 10:34:09 AM','Necesito 4 muletas')
GO

INSERT INTO Operacion(usuarioId,elementoId,estadoOperacionId,tipoOperacionId,fechaInicio,comentarios)
VALUES (1,1,1,2,'20120613 10:34:09 AM','Regalo 2 muletas que ya no uso')
GO

INSERT INTO Operacion(usuarioId,elementoId,estadoOperacionId,tipoOperacionId,fechaInicio,comentarios)
VALUES (2,1,1,2,'20120612 10:34:09 AM','Regalo muleta')
GO