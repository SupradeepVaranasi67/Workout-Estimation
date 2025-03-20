import { useNavigate } from 'react-router-dom';

export default function MuscleSelection() {
  const navigate = useNavigate();
  
  const muscles = [
    { name: 'Arms', emoji: '💪' },
    { name: 'Forearms', emoji: '🦾' },
    { name: 'Chest', emoji: '🫀' },
    { name: 'Back', emoji: '🔙' },
    { name: 'Abs/Core', emoji: '🎯' },
    { name: 'Legs', emoji: '🦵' },
    { name: 'Shoulders', emoji: '🏋️' },
    { name: 'Glutes', emoji: '🍑' },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Select Muscle Groups</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {muscles.map((muscle) => (
            <button
              key={muscle.name}
              onClick={() => navigate('/workout-builder')}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <span className="text-4xl mb-2">{muscle.emoji}</span>
              <span className="text-lg font-medium">{muscle.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}