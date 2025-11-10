import Player from '@/components/solutions/analyze-live-video/player';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <Player inferenceUrl="https://api.moondream.ai/v1" />
      </div>
    </div>
  );
}

export default App;
