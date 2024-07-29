export const phoneRegex =
  // /^(\+\d{1,3}\s?)?\(?\d{3,4}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  /^(?=.{1,14}$)(\+\d{1,3}\s?)?\(?\d{3,4}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault(); // Prevent pasting
};

export const handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault(); // Prevent copying
};

export const handleCut = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault(); // Prevent cutting
};
