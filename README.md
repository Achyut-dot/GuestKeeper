# GuestKeeper

**GuestKeeper** is a user-friendly reservation management application built with **Angular**. It allows users to create, edit, delete, and view guest reservations efficiently. All data is stored locally using the browser’s **localStorage**, making it lightweight and simple to deploy without a backend. Additionally, a **Mock API** powered by **Mockoon** is used to simulate backend operations such as PUT, DELETE, UPDATE, GET, and GET by ID.

## Features

- 📝 **Create Reservations**: Add new guest reservations with ease.
- ✏️ **Edit Reservations**: Modify existing reservation details.
- ❌ **Delete Reservations**: Remove reservations when no longer needed.
- 👀 **View Reservations**: Browse all current reservations in an organised list.
- 💾 **Local Storage**: All data is stored in the browser's local storage, ensuring fast performance and offline accessibility.
- 🔄 **Mock API Support**: Utilize a simulated backend with Mockoon for handling PUT, DELETE, UPDATE, GET, and GET by ID operations.

## Tech Stack

- **Framework**: Angular
- **Language**: TypeScript, HTML, CSS
- **Storage**: Browser `localStorage`
- **Mock API**: [Mockoon](https://mockoon.com/) for simulating backend functionality

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally:  
  ```bash
  npm install -g @angular/cli
  ```
- [Mockoon](https://mockoon.com/) installed for running the mock API

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/guestkeeper.git
   cd guestkeeper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to:  
   `http://localhost:4200`

5. (Optional) Start Mockoon and run the mock API server configured with endpoints for:
   - GET all reservations
   - GET reservation by ID
   - PUT (update) reservation
   - DELETE reservation
   - POST (create) reservation
