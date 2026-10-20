import '@testing-library/jest-dom'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
})

// Ant Design consulta getComputedStyle; JSDOM no implementa los pseudo-elementos.
const getComputedStyleOriginal = window.getComputedStyle
window.getComputedStyle = (elemento) => getComputedStyleOriginal(elemento)
