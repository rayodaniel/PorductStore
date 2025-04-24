# 🚀 Proyecto Next.js 15 + React Hook Form + Tailwind CSS + RxJS

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-✓-EC5990?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-✓-06B6D4?logo=tailwindcss)
![RxJS](https://img.shields.io/badge/RxJS-✓-B7178C?logo=reactivex)

## 📋 Descripción

Proyecto moderno desarrollado con:
- **Next.js 15** con TurboPack para desarrollo ultrarrápido
- **React Hook Form** para manejo eficiente de formularios
- **Tailwind CSS** para estilizado ágil y responsive
- **RxJS** para programación reactiva y manejo de streams

## 🛠️ Requisitos

- Node.js 18+
- npm 9+ o yarn 1.22+
- Git

## ⚙️ Configuración

1. **Clonar repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-proyecto.git
   cd tu-proyecto```
   
2. **Then, install the dependencies:**

```bash
cd MercadoLibre
bun install
# or
npm install```
   
## 🚀 Scripts de Ejecución
### `npm run dev`
Inicia servidor de desarrollo con TurboPack (más rápido que webpack):
```bash
npm run dev```

### `npm run build`
Compila para producción:
```bash
npm run build```
### `npm run start`
Inicia servidor en producción:
```bash
npm run start```
### `npm run lint`
Verifica calidad de código:
```bash
npm run lint
```
### `npm run lint:fix`
Corrige problemas automáticamente:
```bash
npm run lint:fix
```
### ` npm run test`
Ejecuta pruebas con Jest:
```bash
npm run test
```
# ✒️ Configuración de Fuentes

## Configuración Roboto

```bash
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
});
```

## Uso en componentes
 
```bash
<html lang="es" className={`${roboto.variable}`}>
<div className={`font-sans ${roboto.variable}`}>
```


# 🧩 Consumo de Apis y Estructura


Esta estructura esta contemplada para manejar con el patron **repository** , que nos va a permitir centralizar la logica de negocio , ya que se utiliza archivos por separado para los llamadas a las **apis** , el manejo de la **logica** y el manejo del la **persistencia** con **RXJS.**

## Diagrama

<aside>
💡
# Estructura del proyecto
</aside>

-  Carpeta core
-     apis
-     repositories
-     state



## Carpeta apis

Esta carpeta centralizara las peticiones al back-end , teniendo dividido por archivos las peticiones necesarias para cada page 



## Carpeta repositories

Esta carpeta se va a encargar de manipular a necesidad la data que respondan las apis , tambien actuara como capa del manejo del estado , de tal manera que solo se puede acceder mediante esta capa 



## Carpeta state

Esta carpeta actuara como el manejo centralizado del estado va a estar asociado por cada carpeta repository es decir un archivo por cada archivo que maneje repository , la unica forma de acceder es por repository

# 🧩 Atomic Desing

Esta metodología se inspira en conceptos de la química y busca organizar los componentes de un diseño digital de manera modular y escalable. Su objetivo principal es crear sistemas de diseño consistentes, reutilizables y fáciles de mantener.

## Niveles de Atomic Design

Los niveles de Atomic Design representan una jerarquía organizada para descomponer las interfaces de usuario en componentes, desde los más básicos hasta los más complejos. Esta estructura se inspira en la química y está compuesta por cinco niveles principales:

## 1. Atomos

Son los elementos más pequeños e indivisibles de un diseño. Representan los bloques fundamentales de una interfaz.

## 2. Moléculas

Son combinaciones de átomos que trabajan juntos para cumplir una función específica. A pesar de ser más complejas, mantienen su simplicidad como unidades funcionales.

## 3. Organismos

Son componentes más grandes y complejos, formados por moléculas y/o átomos. Funcionan como secciones completas de una interfaz.

## 4. Plantillas

Representan la estructura de una página. Organizan organismos, moléculas y átomos para definir cómo se distribuirán en la interfaz.

## 5. Páginas

Son instancias específicas de las plantillas llenas con contenido real. Representan el resultado final de un diseño en acción.

- Átomos → forman moléculas.
- Moléculas → construyen organismos.
- Organismos → se disponen en plantillas.
- Plantillas → se convierten en páginas reales.

#  🧩  Estandar de codigo

### **1. Nomenclatura (Casing)**

- **`camelCase`** para variables, funciones, métodos y propiedades:CopyDownload
    
    javascript
    
    ```
    const myVariable = 42;
    function calculateTotal() {}
    const user = { firstName: 'John' };
    ```
    
- **`PascalCase`** para componentes de React y clases:CopyDownload
    
    jsx
    
    ```
    class MyComponent extends React.Component {}
    function UserProfile() {}
    ```
    
- **`SCREAMING_SNAKE_CASE`** para constantes globales o configuración:CopyDownload
    
    javascript
    
    ```
    const API_KEY = '12345';
    const MAX_ITEMS = 10;
    ```
    

### **2. Variables y Constantes**

- Usa `const` por defecto, `let` solo si necesitas reasignar, y evita `var`.CopyDownload
    
    javascript
    
    ```
    const items = [];
    let counter = 0;// Solo si counter cambiará
    ```
    
- Nombres descriptivos (evita abreviaturas ambiguas):CopyDownload
    
    javascript
    
    ```
    // Mal:const usr = getUser();
    // Bien:const user = getUser();
    ```
    

### **3. Funciones**

- Declara funciones con nombres (evita funciones anónimas cuando sea posible):CopyDownload
    
    javascript
    
    ```
    // Mal:setTimeout(function() {}, 100);
    // Bien:setTimeout(function handleTimeout() {}, 100);
    ```
    
- Usa **arrow functions** cuando sea necesario (ej. para mantener el contexto de `this`):CopyDownload
    
    javascript
    
    ```
    // Bien:
    items.map(item => item.id);
    ```
    

### **4. Strings**

- Usa comillas simples (`'`) para strings, y template literals (```) para interpolación:CopyDownload
    
    javascript
    
    ```
    const name = 'John';
    const greeting = `Hello, ${name}!`;
    ```
    

### **5. Objetos y Arrays**

- Usa sintaxis literal (evita constructores):CopyDownload
    
    javascript
    
    ```
    // Mal:const obj = new Object();
    const arr = new Array();
    // Bien:const obj = {};
    const arr = [];
    ```
    
- Spread operator para copiar objetos/arrays:CopyDownload
    
    javascript
    
    ```
    const newObj = { ...oldObj, key: 'value' };
    const newArray = [...oldArray, newItem];
    ```
    

### **6. Imports y Exports**

- Ordena los imports: librerías externas primero, luego internas:CopyDownload
    
    javascript
    
    ```
    import React from 'react';
    import PropTypes from 'prop-types';
    import { User } from './components/User';
    ```
    
- Usa `export default` solo para componentes o clases.

# 📦 Dependencias Requeridas
- ### Node.js 18+

- ### npm 8+ / yarn 1.22+

- ### Next.js 15+

- ### React 18+

- ###TypeScript 
