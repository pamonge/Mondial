 # -------------------------------
 # Etapa 1: Build (con Node)
 # -------------------------------
# FROM node:22-slim AS build

 # Establecer el directorio de trabajo
# WORKDIR /app

 # Copiar los archivos de configuración y dependencias
# COPY package*.json ./

 # Instalar dependencias
# RUN npm install

 # Copiar el resto del código fuente
# COPY . .

 # Construir la aplicación
# RUN npm run build

 # -------------------------------
 # Etapa 2: Servir con Nginx
 # -------------------------------
# FROM nginx:alpine

 # Eliminar archivos por defecto de Nginx
# RUN rm -rf /usr/share/nginx/html/*

 # Copiar los archivos generados en el build al directorio público de Nginx
# COPY --from=build /app/dist /usr/share/nginx/html

 # Exponer el puerto
# EXPOSE 80

 # Comando de inicio
# CMD ["nginx", "-g", "daemon off;"]

FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0"]