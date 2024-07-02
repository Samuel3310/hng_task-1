function displayCurrentTime() {
  const updateTime = () => {
    const now = new Date();
    const options = { weekday: "long", timeZone: "UTC" };
    const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(now);

    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    const currentTime = `${hours12}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${period}`;

    document.querySelector('[data-testid="currentTimeUTC"]').textContent =
      currentTime;
    document.querySelector('[data-testid="currentDay"]').textContent =
      dayOfWeek;
  };

  // Update time immediately when the function is called
  updateTime();

  // Update time every second using setInterval
  setInterval(updateTime, 1000);
}

// Call the function to start displaying and updating the time
displayCurrentTime();
