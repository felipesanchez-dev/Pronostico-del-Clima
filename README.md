# 🌦️ Proyecto: Pronóstico del Clima 1/15
Este proyecto es una aplicación de pronóstico del clima desarrollada con **React Native** y **Expo**. Permite a los usuarios buscar ubicaciones y obtener información detallada sobre el clima actual y el pronóstico para los próximos días.
## 📱 Características
**Búsqueda de ubicaciones**: Ingresa el nombre de una ciudad para obtener resultados relacionados.
- **Información del clima**: Muestra datos del clima actual, como:
  - 🌡️ Temperatura
  - 🌤️ Condición climática
  - 🌬️ Velocidad del viento
  - 💧 Humedad
  - 🌅 Hora del atardecer
- **Pronóstico diario**: Consulta el pronóstico para los próximos días.
- **Interfaz intuitiva**: Diseño fácil de usar y estéticamente atractivo, creado con **Tailwind CSS**.
## 📱 Plataformas Compatibles

- **Android:** Accede a la aplicación desde cualquier dispositivo Android.  
  [Apk Demo [.apk]](https://job-artifacts.eascdn.net/production/a8f9ca8b-eb29-4ea5-ae17-f6d237018da1/7e26f540-d3ea-4da0-8e3d-342cb462890d/application-1e18e971-69e1-429e-bbb1-b112f5df482e.apk?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=www-production%40exponentjs.iam.gserviceaccount.com%2F20250111%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250111T025449Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=8671dff473c9a24162cc34eb53e83327467918d481c55b46fa39db791d39d1d4c924299dc3961976a3d6975df118981e7397fd2dec10c2d75ab1abbfbb7e5407fe17266cd386bd8fa8589705c3b9932e19ae0aab26edc5b92c6e925176a7a33a484ee154169e74d2467f76c1a1b70d712a17c71d0c4582e8bea877577a402a809c8d85713b062797993c947a08629cff1229a95c638c8de8c8d5c8ba63c387b167ec6d026aea369c4b1fdbf8c0ebe7879cb7dd410a060368cf3443196418a78d180bb2042506d862893278d44a7fab098b922c5ae51846000137bbfdbcf791c0cdb6068f7228853e3e022603e03087ebac971f1627e71cc025ca98a4164a9924)

- **iOS:** La aplicación es compatible con dispositivos Apple (iPhone, iPad).
## 📂 Estructura del Proyecto
```JavaScript
root/ 
├── api/ // Manejo de llamadas a la API 
├── app/ // Componentes principales 
├── assets/ // Recursos estáticos (imágenes, fuentes, etc.) 
├── constants/ // Configuración de constantes (colores, claves API) 
├── scripts/ // Scripts útiles (reset del proyecto) 
├── global.css // Estilos base con Tailwind CSS 
├── app.json // Configuración de Expo 
 ```

## ⚙️ Tecnologías Utilizadas
- **React Native** (v0.76): Desarrollo móvil multiplataforma.
- **Expo**: Framework para construir aplicaciones con facilidad.
- **Axios**: Manejo de peticiones HTTP a la API de clima.
- **Tailwind CSS**: Estilización rápida y eficiente.
- **React Navigation**: Navegación fluida entre pantallas.
- **Lodash**: Funciones de utilidad, como `debounce`.
## 🌐 API Usada
Este proyecto utiliza la **WeatherAPI** para obtener información del clima. [Visita WeatherAPI aquí](https://www.weatherapi.com/) para más información.
## 🛠️ Instalación y Ejecución
Sigue estos pasos para clonar y ejecutar el proyecto localmente:
### ⚙️ Configuracion Adicional
Agrega tu API KEY
```JavaScript
root/ 
├── constants/index.tsx
//constants\index.tsx
export const apiKey = 'API KEY';
 ```
1. **Clona este repositorio:**

```bash
git clone https://github.com/felipesanchez-dev/
```
2.  **Instala las dependencias:**
```bash
  npm install
```
3.  **Inicia el servidor de desarrollo:**
```bash
  npm start
```
### Salida en consola
```bash
Metro waiting on exp://192.168.1.2:####
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:####

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your editor

› Press ? │ show all commands
```
<br>

## ✨ Capturas de Pantalla

| ![Captura 1](https://github.com/felipesanchez-dev/Pronostico-del-Clima/blob/main/assets/Capturas/app1.jpg) | ![Captura 2](https://github.com/felipesanchez-dev/Pronostico-del-Clima/blob/main/assets/Capturas/app2.jpg) | ![Captura 3](https://github.com/felipesanchez-dev/Pronostico-del-Clima/blob/main/assets/Capturas/app3.jpg) |
|------------------------------------------|------------------------------------------|------------------------------------------|

## 📌 Próximos Pasos
Mejorar la accesibilidad de la aplicación.
Implementar más detalles sobre el pronóstico extendido.
Optimizar el manejo de errores en las llamadas a la API.

# 📄 Licencia
Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo. 😊

## **💬 Conéctate conmigo**  

Si tienes preguntas, ideas o simplemente quieres compartir tu experiencia desarrollando proyectos similares, ¡no dudes en contactarme! 😊  

**Correo:** [jfelipe9.121@gmail.com](mailto:jfelipe9.121@gmail.com)  
**LinkedIn:** [felipereyessa](https://www.linkedin.com/in/felipereyessa)  
**Sitio Web:** [Mi portafolio](https://pipedev.vercel.app/)  

--- 
**⚠️ Nota importante:** Este es un proyecto es parte del reto **Reto: 15 Proyectos con APIs 🚀:** [[Link del repositorio]](https://github.com/felipesanchez-dev/RN-15-Projects-APIs-Challenge), por lo que **no se aceptarán contribuciones externas** (pull requests o commits).  
