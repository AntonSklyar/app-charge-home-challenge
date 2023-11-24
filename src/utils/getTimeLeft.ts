function getTimeLeft(timeLeftMs: number): string {
  const totalSeconds: number = Math.floor(timeLeftMs / 1000);
  const hours: number = Math.floor(totalSeconds / 3600);
  const minutes: number = Math.floor((totalSeconds % 3600) / 60);
  const seconds: number = totalSeconds % 60;

  const formattedHours: string = String(hours).padStart(2, '0');
  const formattedMinutes: string = String(minutes).padStart(2, '0');
  const formattedSeconds: string = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export default getTimeLeft;
