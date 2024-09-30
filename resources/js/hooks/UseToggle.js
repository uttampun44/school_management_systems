import { useState } from "react";

/**
 * Custom hook for managing a toggle state.
 *
 * @param {boolean} [initialValue=false] - The initial state of the toggle. Default is `false`.
 * @returns {[boolean, function]} An array containing:
 *   - A boolean representing the current toggle state.
 *   - A function to toggle the state between `true` and `false`.
 *
 * @example
 * const [isOpen, toggleOpen] = useToggle();
 *
 * // Usage in a component
 * return (
 *   <div>
 *     <button onClick={toggleOpen}>Toggle</button>
 *     {isOpen && <p>The toggle is open!</p>}
 *   </div>
 * );
 */

export default function useToggle(initialValue = false) {
    const [togglevalue, setToggle] = useState(initialValue);

    const toggles = () => {
        setToggle((previousState) => !previousState);
    };

    return [togglevalue, toggles];
}
