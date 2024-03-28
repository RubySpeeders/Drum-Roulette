export default function kebabToTitle(kebabCaseString: string) {
  // Split the kebab case string by '-'
  const words = kebabCaseString.split("-");

  // Capitalize the first letter of each word
  const titleCaseString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return titleCaseString;
}
