import React, { useState } from "react";

interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

const Tooltip = ({ label, children }: TooltipProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      <div className="group relative">
        {children}
        <div
          className={`${
            isTooltipVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2"
          } transition-opacity transform duration-300 absolute z-10 top-1/2 left-full px-3 py-2 text-xs text-white bg-gray-900 rounded-md pointer-events-none tooltip`}
        >
          <div className="tooltip-arrow absolute right-full left-[-4px] top-[10px] w-3 h-3 bg-gray-900 transform rotate-45"></div>
          {Math.round(Number(label) / 1000)}KB
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
