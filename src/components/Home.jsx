import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="max-w-3xl text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to the Ultimate Fitness Destination
        </h1>
        <p className="text-xl mb-8">
          Transform your body, elevate your mind, and achieve your fitness goals with personalized workouts tailored just for you.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/20 p-6 rounded-lg">
            <span className="text-4xl mb-2">💪</span>
            <h3 className="text-lg font-semibold">Custom Workouts</h3>
          </div>
          <div className="bg-white/20 p-6 rounded-lg">
            <span className="text-4xl mb-2">📊</span>
            <h3 className="text-lg font-semibold">Progress Tracking</h3>
          </div>
          <div className="bg-white/20 p-6 rounded-lg">
            <span className="text-4xl mb-2">🎯</span>
            <h3 className="text-lg font-semibold">Goal Setting</h3>
          </div>
          <div className="bg-white/20 p-6 rounded-lg">
            <span className="text-4xl mb-2">🎥</span>
            <h3 className="text-lg font-semibold">Form Analysis</h3>
          </div>
        </div>
        <button
          onClick={() => navigate('/equipment')}
          className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-100 transition-colors"
        >
          Create a Workout
        </button>
      </div>
    </div>
  );
}