const baseClasses = 
    'py-2.5 px-5 me-2 mb-2 mt-2.5 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100';

/**
 * An object that defines CSS class strings for different button color themes.
 * Each property represents a color theme and contains a string of concatenated
 * CSS classes for styling buttons.
 *
 * @property {string} blue - CSS classes for a blue-themed button, including background,
 *                           text color, hover, and focus styles.
 * @property {string} white - CSS classes for a white-themed button, including background,
 *                            text color, hover, and focus styles.
 * @property {string} black - CSS classes for a black-themed button, including background,
 *                            text color, hover, and focus styles.
 */
const colorButton = {
    blue: `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`,
    white: `${baseClasses} bg-black text-white hover:bg-gray-800 focus:ring-gray-500`,
    black: `${baseClasses} bg-white text-black hover:bg-gray-100 focus:ring-gray-500`,
};

export const dictionaryColor = (color: string) => {
    return colorButton[color as keyof typeof colorButton] || colorButton.white;
};
