import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

function parseTargetDate(input: string): Date | null {
  const normalized = input.replace(/[\u2013\u2014]/g, "-").replace(/\s+/g, " ").trim();

  const directDate = new Date(normalized);
  if (!Number.isNaN(directDate.getTime())) {
    return directDate;
  }

  // Support range format like "October 29 - 30, 2026" by using the first day.
  const rangeMatch = normalized.match(/^([A-Za-z]+)\s+(\d{1,2})\s*-\s*\d{1,2},\s*(\d{4})$/);
  if (rangeMatch) {
    const [, month, startDay, year] = rangeMatch;
    const rangeDate = new Date(`${month} ${startDay}, ${year} 00:00:00`);
    if (!Number.isNaN(rangeDate.getTime())) {
      return rangeDate;
    }
  }

  return null;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const parsedTargetDate = parseTargetDate(targetDate);

    if (!parsedTargetDate) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const calculateTimeLeft = () => {
      const difference = parsedTargetDate.getTime() - Date.now();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
      {units.map((unit) => (
        <div key={unit.label} className="bg-white border border-rule rounded-2xl h-[78px] sm:h-[90px] min-w-[92px] sm:min-w-0 flex flex-col items-center justify-center">
          <div className="text-[34px] sm:text-[44px] font-bold text-ink leading-none" style={{ fontFamily: 'var(--font-mono)' }}>
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-[10px] text-slate uppercase tracking-[1px] mt-1" style={{ fontFamily: 'var(--font-body)' }}>
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
