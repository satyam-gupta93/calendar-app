# Stylish Wall Calendar

A modular, highly interactive React-based calendar component designed with a classic "spiral-bound" aesthetic. This project features theme-adaptive styling, complex date range selection, and persistent task management.

---

## Live Demo & Resources

* **Live Link**: https://calendar-app-amber.vercel.app/ 
* **Video Demonstration**: https://drive.google.com/file/d/1orLl137q_M1jyYkz-NCzD8ogYOf09EVk/view

---

## Core Features

### 1. Interactive Date Range Selection
The component implements a two-click range algorithm. Users can select a start and end date with real-time hover feedback. The UI dynamically adjusts to render a continuous "pill-shaped" highlight across the selected span.

### 2. Dual-Mode Note System
Manage tasks in two distinct contexts:
* **Monthly Notes**: General reminders tied to the specific month view.
* **Range Notes**: Specific descriptions tied to a selected date range.

### 3. Physical Aesthetic & Animations
* **Spiral Binding**: Custom CSS-engineered spiral holes with inset shadows for depth.
* **Page Flip**: A 3D-perspective transformation triggered on month navigation to simulate a physical calendar.
* **Dynamic Badges**: Month and Year indicators using modern clip-path geometry.

### 4. Theme Engine
Full support for Light and Dark modes. The system utilizes Tailwind CSS in combination with CSS Variables to ensure smooth transitions and high-contrast accessibility.

### 5. Data Persistence
All notes and theme preferences are synchronized with **LocalStorage**, ensuring user data remains intact after browser refreshes.

---

## Technical Architecture

The project is modularized into specialized components for better maintainability:

* **Controller (`index.tsx`)**: Orchestrates global state, theme logic, and persistence.
* **Image Panel (`ImagePanel.tsx`)**: Handles navigation and dynamic hero image rendering.
* **Grid Engine (`CalendarGrid.tsx`)**: Manages complex date calculations and range-based styling.
* **Notes Section (`NotesSection.tsx`)**: Handles user input and categorized note lists.
* **Utilities (`utils.ts`)**: Pure functions for date parsing and grid construction.

---

## Getting Started Locally

### Prerequisites
* Node.js (v18.0.0 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/wall-calendar.git](https://github.com/your-username/wall-calendar.git)
    cd wall-calendar
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```
    *Note: This project uses `lucide-react` for icons.*

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **View the app**:
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Implementation Choices

* **Lucide React**: Chosen for lightweight, consistent iconography across themes.
* **Clip-Path Geometry**: Used for the month badge to create a modern, non-rectangular look without heavy images.
* **3D Transforms**: Employed `perspective` and `rotateX` properties in CSS to create a tactile feel that standard flat calendars lack.
* **Local State**: Opted for native React state over Redux to keep the component lightweight and portable.
