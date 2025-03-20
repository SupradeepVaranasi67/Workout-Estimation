import { useNavigate } from 'react-router-dom';

export default function EquipmentSelection() {
  const navigate = useNavigate();
  
  const equipment = [
    { name: 'Dumbbell', emoji: '🏋️‍♂️' },
    { name: 'Kettlebell', emoji: '💪' },
    { name: 'Bodyweight', emoji: '🧘‍♂️' },
    { name: 'Bench', emoji: '🏋️' },
    { name: 'Barbell', emoji: '🏋️‍♀️' },
    { name: 'Pull-up Bar', emoji: '🔝' },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Select Your Equipment</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {equipment.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate('/muscles')}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <span className="text-4xl mb-2">{item.emoji}</span>
              <span className="text-lg font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}