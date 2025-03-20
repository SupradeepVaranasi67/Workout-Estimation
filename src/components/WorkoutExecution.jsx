import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Webcam from 'react-webcam';
import Confetti from 'react-confetti';

export default function WorkoutExecution() {
  const location = useLocation();
  const exercises = location.state?.exercises || [];
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef(null);
  const [completedExercises, setCompletedExercises] = useState(new Set());

  const handleNextSet = () => {
    if (currentSet < exercises[currentExercise].sets) {
      setCurrentSet(currentSet + 1);
    } else {
      const newCompleted = new Set(completedExercises);
      newCompleted.add(exercises[currentExercise].id);
      setCompletedExercises(newCompleted);
      
      if (currentExercise < exercises.length - 1) {
        setCurrentExercise(currentExercise + 1);
        setCurrentSet(1);
      } else {
        setIsComplete(true);
      }
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {isComplete ? (
        <div className="text-center">
          <Confetti />
          <h2 className="text-4xl font-bold mb-4">Congratulations! You crushed it! 🎉</h2>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Workout in Progress</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-semibold">
                  {exercises[currentExercise].name}
                </h3>
                <p className="text-gray-600">
                  Set {currentSet} of {exercises[currentExercise].sets}
                </p>
              </div>
              <button
                onClick={() => setShowCamera(!showCamera)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                📷 {showCamera ? 'Hide Camera' : 'Show Camera'}
              </button>
            </div>

            {showCamera && (
              <div className="mb-6">
                <Webcam
                  ref={webcamRef}
                  className="w-full rounded-lg"
                  mirrored={true}
                />
              </div>
            )}

            <div className="flex justify-between items-center">
              <div className="text-lg">
                Target: {exercises[currentExercise].reps} reps
              </div>
              <button
                onClick={handleNextSet}
                className="bg-green-500 text-white px-6 py-2 rounded-lg"
              >
                Complete Set ✓
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Workout Progress</h3>
            <div className="space-y-2">
              {exercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  className="flex items-center bg-white p-3 rounded-lg"
                >
                  <span className={`mr-2 ${
                    completedExercises.has(exercise.id) ? 'text-green-500' : 'text-gray-400'
                  }`}>
                    {completedExercises.has(exercise.id) ? '✓' : '○'}
                  </span>
                  <span className={`${
                    index === currentExercise ? 'font-bold' : ''
                  }`}>
                    {exercise.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}