import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <div className="flex items-center gap-4">
      {units.map((unit, idx) => (
        <div key={unit.label} className="flex items-center gap-4">
          <div className="bg-white border border-rule rounded-2xl w-20 h-[90px] flex flex-col items-center justify-center">
            <div className="text-[44px] font-bold text-ink leading-none" style={{ fontFamily: 'var(--font-mono)' }}>
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] text-slate uppercase tracking-[1px] mt-1" style={{ fontFamily: 'var(--font-body)' }}>
              {unit.label}
            </div>
          </div>
          {idx < units.length - 1 && (
            <div className="text-[32px] font-bold text-cipher" style={{ fontFamily: 'var(--font-mono)' }}>:</div>
          )}
        </div>
      ))}
    </div>
  );
}
