# Workout Estimation 🏋️‍♂️

Workout Estimation is a React-based application that helps users build and execute customized workout plans. It allows users to select equipment, target specific muscle groups, and track workout execution.

## Features
- **Equipment Selection:** Choose available gym equipment.
- **Muscle Selection:** Target specific muscle groups.
- **Workout Builder:** Create a structured workout plan.
- **Workout Execution:** Track and complete workouts.

## Tech Stack
- **Frontend:** React, React Router, Tailwind CSS
- **State Management:** React State
- **Styling:** Tailwind CSS

## Installation & Usage
### Prerequisites
- Node.js (>=16.x)
- npm or yarn

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/SupradeepVaranasi67/Workout-Estimation.git
   ```
2. Navigate to the project folder:
   ```sh
   cd workout-builder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open the app in your browser at:
   ```
   http://localhost:5173
   ```

## Project Structure
```
/src
 ├── components/          # React components
 ├── pages/               # Different views
 ├── App.jsx              # Main application file
 ├── main.jsx             # Entry point
 ├── index.css            # Global styles
 └── assets/              # Images and static files
```

## Available Routes
- `/` - Home Page
- `/equipment` - Equipment Selection
- `/muscles` - Muscle Selection
- `/workout-builder` - Create workout plans
- `/workout-execution` - Execute and track workouts

