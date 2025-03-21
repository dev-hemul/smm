import './App.css';
import Smm from './assets/smm.jpg';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#c2b6e1] p-4">
      <img
        src={Smm}
        alt="SMM Specialist"
        width="480"
        height="540"
        className="max-w-full h-auto rounded-xl shadow-lg !mb-10 border"
      />
      <button className="mt-5 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 border-2 border-transparent hover:border-blue-400">
        <a
          href="https://t.me/SMM2025Mission977996_bot"
          className="block w-full h-full"
        >
          Стати топовим SMM спеціалістом
        </a>
      </button>
    </div>
  );
}

export default App;
