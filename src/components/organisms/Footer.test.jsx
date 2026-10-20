import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Componente Footer', () => {
    it('debe mostrar el año actual calculado por código', () => {
        render(<Footer nombre="Ana Pérez" correo="ana@correo.com" ubicacion="Santiago, Chile" />)
        const anio = String(new Date().getFullYear())
        expect(screen.getByText(new RegExp(`© ${anio} Ana Pérez`))).toBeInTheDocument()
        expect(screen.getByText(/ana@correo.com/)).toBeInTheDocument()
    })
})
