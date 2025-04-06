'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const lines = sourceString.split(';');

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return;
    }

    const colonIndex = trimmedLine.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = trimmedLine.slice(0, colonIndex).trim();
    const value = trimmedLine.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
