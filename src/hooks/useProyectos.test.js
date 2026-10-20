import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import useProyectos from './useProyectos'

const datos = [
    { id: 1, titulo: 'Tienda', categoria: 'Web' },
    { id: 2, titulo: 'Dashboard', categoria: 'React' },
]

describe('useProyectos', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('debe iniciar cargando y sin proyectos', () => {
        const { result } = renderHook(() => useProyectos(datos))
        expect(result.current.cargando).toBe(true)
        expect(result.current.proyectos).toEqual([])
    })

    it('debe cargar los proyectos después de 500 ms', () => {
        const { result } = renderHook(() => useProyectos(datos))
        act(() => {
            vi.advanceTimersByTime(500)
        })
        expect(result.current.cargando).toBe(false)
        expect(result.current.proyectos).toHaveLength(2)
    })

    it('debe filtrar por texto de búsqueda', () => {
        const { result } = renderHook(() => useProyectos(datos))
        act(() => {
            vi.advanceTimersByTime(500)
        })
        act(() => {
            result.current.setBusqueda('tien')
        })
        expect(result.current.proyectos.map((p) => p.titulo)).toEqual(['Tienda'])
    })
})
