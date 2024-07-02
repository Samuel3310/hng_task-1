// Function to display current time in UTC
function displayCurrentTime() {
  const now = new Date();
  const options = { weekday: "long", timeZone: "UTC" };
  const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(now);
  const currentTime = now.toISOString().slice(11, 19); // Extract HH:mm:ss from ISO string

  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    currentTime;
  document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
}

displayCurrentTime();
