
const fortunes = [
  "Someone is talking about you. For once, it's actually something nice.",
  "A mysterious opportunity approaches. It may also be a scam.",
  "Your ex is thinking about you. Please remain strong.",
  "You will soon receive unexpected money. Don't spend it all at once.",
  "The stars are aligned. Unfortunately, so are your problems.",
  "Someone close to you is hiding something. Probably their search history.",
  "A new chapter is coming. You should probably finish the last one first.",
  "Your intuition is correct. Trust it. Especially about that person.",
  "Great things await you. After a small and completely unnecessary inconvenience.",
  "The universe has plans for you. The universe needs to get a hobby.",
  "An old friend will return. You have been warned.",
  "Your lucky number is 7. Your unlucky number is everything else."
];

const button = document.getElementById("fortune-button");
const display = document.getElementById("fortune");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);

  display.textContent = fortunes[randomIndex];

  button.textContent = "ANOTHER READING? ✧";
});
