# shopping-list
(BACKEND) Lista de compras para el supermercado.

(Lo que debe de hacer...)
- Registra productos de varios establecimientos o sitios web
- Compara los precios de los productos entre establecimientos o sitios web.
- Programa los productos o servicios a comprar a una fecha específica
  - Ordena los productos por fechas, horarios y establecimientos de compra, osea, cuándo, dónde y qué se va a comprar.
- Colabora con otros precios registrados por otros usuarios.
  - Actualiza tu lista con los precios de otros usuarios que han ido al supermercado, esto implica:
    - La calificación de tal usuario, en su publicación de producto en tal establecimiento y hora. Su tal producto en tal establecimiento en tal precio en ese preciso día y hora debe de ser calificada para su veracidad, incluso comentada.
    -  Ver la calificación total del usuario por veracidad del producto.
    -  Recibir notificaciones sobre actualizaciones de productos o productos nuevos
- Templates para ti
  - Elige entre las plantillas de inicio para ti, esto para no empezar de cero, por ejemplo la plantilla Canasta Básica.


== Requerimientos ==:
- XAMPP 8.2.12
- Arquitectura x64
- NodeJS v20.17.0

== Bases de datos ==
La base de datos que ahora estamos usando, claramente es un MariaDB, y por consiguiente Relacional, pero en este ejercicio también estamos probando la propiedad de las columnas de soportar JSON, y así hacer una simulación de una base de datos NoSQL, no es lo más eficiente, pero se presta a utilizar cualquier base de datos NoSQL que se requiera.

== Es un Api Rest == 
Como Backend básico, utilizamos Api Rest, y aquí hacemos uso de los routers para organizar nuestras consultas.

== Sólo por hobbie ==
Este proyecto puede volar a la imaginación, pero sólo es por hobbie, si se llega a algo serio, entonces tendríamos qué cambiar de tecnologías, para que pueda soportar mejores tranquizas al mundo entero.