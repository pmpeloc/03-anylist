<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# AnyList | Lista de productos con NestJS, Postgres SQL, GraphQL y Apollo Server

## Entorno DEV

1. Clonar el proyecto
2. Copiar el `env.example` y renombrar a `.env`
3. Ejecutar

```
yarn install
```

4. Levantar la imagen (Docker Desktop)

```
docker-compose up -d
```

5. Levantar el backend de NestJS

```
yarn start:dev
```

6. Visitar el sitio

```
localhost:3000/graphql
```

7. Ejecutar la mutation "executeSeed", para llenar la base de datos con información

8. Subir cambios a Docker

```
docker push pmpeloc/nest-graphql-prod:1.0.0  (reemplazar por la versión requerida)
```

9. Correr la imagen Docker

```
docker run -p 3200:4000 --env-file=.env.prod pmpeloc/nest-graphql-prod:1.0.0
```
