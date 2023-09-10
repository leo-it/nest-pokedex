<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1.Clonar el repositorio

2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. clonar eel archivo **.env.template** y renombrar la copia a **.env**

6. llenar las variables de entorno definidas `env`

7.ejecutar la aplicacion en dev:

```
yarn start:dev
```

8. Reconstruir la base de datos con la Seed

```
http://localhost:3000/api/v2/seed
```

##Stack usado

*MongoDB
*Nest

## Instalaciones recomendadas para el curso

\*https://gist.github.com/Klerith/c0ef4f48d986e2cf3308bb54fff84ea5
