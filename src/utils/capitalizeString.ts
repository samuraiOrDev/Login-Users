function capitalizeString(input: string): string {
  if (input.length === 0) return input;

  const words = input.toLowerCase().split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}

export default capitalizeString;
