import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WorkoutBuilder() {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([
    { id: 1, name: 'Dumbbell Curls', sets: 3, reps: 12 },
    { id: 2, name: 'Shoulder Taps', sets: 3, reps: 10 },
    { id: 3, name: 'Pushups', sets: 3, reps: 15 },
    { id: 4, name: 'Plank', sets: 3, reps: 30 },
    { id: 5, name: 'Lunges', sets: 3, reps: 12 },
    { id: 6, name: 'Squats', sets: 3, reps: 15 },
  ]);

  const updateExercise = (id, field, value) => {
    setExercises(exercises.map(ex => {
      if (ex.id === id) {
        return { ...ex, [field]: value };
      }
      return ex;
    }));
  };

  const deleteExercise = (id) => {
    setExercises(exercises.filter(ex => ex.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Customize Your Workout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{exercise.name}</h3>
                <button
                  onClick={() => deleteExercise(exercise.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <label className="block text-sm text-gray-600">Sets</label>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateExercise(exercise.id, 'sets', Math.max(1, exercise.sets - 1))}
                      className="px-2 py-1 bg-gray-200 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">{exercise.sets}</span>
                    <button
                      onClick={() => updateExercise(exercise.id, 'sets', Math.min(5, exercise.sets + 1))}
                      className="px-2 py-1 bg-gray-200 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Reps</label>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateExercise(exercise.id, 'reps', Math.max(5, exercise.reps - 5))}
                      className="px-2 py-1 bg-gray-200 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">{exercise.reps}</span>
                    <button
                      onClick={() => updateExercise(exercise.id, 'reps', Math.min(20, exercise.reps + 5))}
                      className="px-2 py-1 bg-gray-200 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/workout-execution', { state: { exercises } })}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Finalize Workout
          </button>
        </div>
      </div>
    </div>
  );
}