/**
 * 
 * @param {number} end the number higher than the highest number possible. If end is 300, the possibilities are between 0 and 299
 */

export const random = (end) => Math.floor(Math.random() * end);