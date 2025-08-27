export function highlightMatch(text: string, search: string) {
  const regExp = new RegExp(`(${search})`, 'i');

  const textParts = text.split(regExp);

  return textParts.map((textPart) => {
    return textPart.toLowerCase() === search.toLowerCase() ? (
      <span className={'highlightedText'}>{textPart}</span>
    ) : (
      textPart
    );
  });
}
