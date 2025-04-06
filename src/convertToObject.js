'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {}; // правильне ім'я змінної для результату
  const lines = sourceString.split(';');

  for (let line of lines) {
    line = line.trim();

    if (!line) {
      continue;
    }

    const colonIndex = line.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  }

  return result; // повертаємо результат
}

module.exports = convertToObject; // це правильно розташовано
