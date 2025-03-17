import React, { useEffect, useState } from "react";

const StartupAnimation: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex item0center justify-center bg-black">
      {isAnimating ? (
        <div className="text-white text-4xl font-bold vortex">
          <div className="transform rotate-45">Deez</div>
        </div>
      ) : (
        <div className="explode">
          <h1 className="text-4xl font-bold text-white">Welcome to the site</h1>
        </div>
      )}
    </div>
  );
};

export default StartupAnimation;
