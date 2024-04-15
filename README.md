# Onebox Event Reservation Client

This project is a technical test for ONEBOX conducted by Rita Solà. It is developed using Angular 17 and Tailwind CSS. The application utilizes HTTPClient for API communication, RXJs for reactive programming, and OnPush change detection strategy for performance optimization.

## Project Overview

The goal of this project is to implement a web client for managing event seat reservations with various sessions and availabilities. The system comprises a main view displaying a list of currently available events (catalog) and a detailed view (event details) containing a list of available sessions for that event and a shopping cart.

## Development Server

To run the development server, follow these steps:

1. Install Angular CLI globally if not already installed:

   ```
   npm install -g @angular/cli
   ```

2. Clone this repository:

   ```
   git clone <repository-url>
   ```

3. Navigate to the project directory:

   ```
   cd PtOneboxRitaSola
   ```

4. Install dependencies:

   ```
   npm install
   ```

5. Start the development server:

   ```
   ng serve
   ```

6. Open your browser and navigate to `http://localhost:4200/` to view the application. The application will automatically reload if you make any changes to the source files.

## Angular CLI Commands

You can use the Angular CLI commands to generate various components, directives, pipes, services, classes, guards, interfaces, enums, and modules:

- Component: `ng generate component component-name`
- Directive: `ng generate directive|pipe|service|class|guard|interface|enum|module`

## Building the Project

To build the project, execute the following command:

```
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Further Assistance

For further assistance with the Angular CLI, you can use:

```
ng help
```

Or refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

This README provides a comprehensive guide for setting up the development environment and running the project. If you encounter any issues or need further assistance, please don't hesitate to reach out.
