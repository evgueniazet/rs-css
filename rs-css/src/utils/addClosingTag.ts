export const addClosingTag = (tag: string): string => {
  const tagRegex = /<(\w+)(.*?)\/?>/;
  const regexResult: RegExpMatchArray | null = tag.match(tagRegex);
  if (regexResult) {
    const tagName: string = regexResult[1];
    const attributes: string = regexResult[2].replace(/^\s+|\s+$/g, '');
    const space: string = attributes.length > 0 ? ' ' : '';
    return `<${tagName}${space}${attributes}></${tagName}>`;
  }

  return tag;
};
