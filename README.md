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
  [Apk Demo [.apk]](https://expo.dev/artifacts/eas/4HyspTxXZwrbuyKpq5TH5b.apk)

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
### Salida en consola 📤
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
