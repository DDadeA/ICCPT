const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export function randomChars(length: number = 16) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    // Selects a random character from the 'characters' string
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function cleanVarName(name: string): string {
  // Replace non-alphanumeric characters with underscores (Allowing korean characters)
  return name.replace(/[^a-zA-Z0-9가-힣_]/g, "_");
}
