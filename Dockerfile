# Build stage
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runtime stage
FROM nginx:1.27-alpine

# If CRA (create-react-app) output:
COPY --from=build /app/build /usr/share/nginx/html
# If Vite output, use this instead:
# COPY --from=build /app/dist /usr/share/nginx/html

# Nginx config (SPA + caching)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
