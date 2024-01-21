"use client"
import { useState } from "react";
import { Transition } from "@headlessui/react";

const SubmitButton: React.FC = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;
  
    setPosition({ left, top });
  };
  
  return (
    <div
      className="relative w-full bg-primary blur p-4 text-white outline-none overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Transition
        show={isHovered}
        enter="transform transition-transform duration-200 ease-in-out"
        enterFrom="scale-0"
        enterTo="scale-100"
        leave="transform transition-transform duration-200 ease-in-out"
        leaveFrom="scale-100"
        leaveTo="scale-0"
        className="absolute"
        style={{
          left: `${position.left}px`,
          top: `${position.top}px`,
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "200px",
          background: "radial-gradient(circle closest-side, white, transparent)",
        }}
      ></Transition>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <SubmitButton />
    </div>
  );
}
