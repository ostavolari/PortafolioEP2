import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import useContactForm, { validarContacto } from './useContactForm'

const escribir = (name, value) => ({ target: { name, value } })
const envio = { preventDefault: () => {} }

describe('validarContacto', () => {
    it('debe devolver errores cuando los campos estan vacios', () => {
        const errores = validarContacto({ nombre: '', correo: '', mensaje: '' })
        expect(Object.keys(errores)).toEqual(['nombre', 'correo', 'mensaje'])
    })

    it('debe rechazar un correo con formato invalido', () => {
        const errores = validarContacto({ nombre: 'Ana', correo: 'ana@', mensaje: 'Hola' })
        expect(errores.correo).toBe('Formato de correo inválido.')
    })
})

describe('useContactForm', () => {
    it('debe iniciar con valores vacios y sin enviar', () => {
        const { result } = renderHook(() => useContactForm())
        expect(result.current.valores).toEqual({ nombre: '', correo: '', mensaje: '' })
        expect(result.current.enviado).toBe(false)
    })

    it('debe actualizar el valor de un campo', () => {
        const { result } = renderHook(() => useContactForm())
        act(() => {
            result.current.cambiar(escribir('nombre', 'Ana'))
        })
        expect(result.current.valores.nombre).toBe('Ana')
    })

    it('debe mostrar errores al enviar el formulario vacio', () => {
        const { result } = renderHook(() => useContactForm())
        act(() => {
            result.current.enviar(envio)
        })
        expect(result.current.errores.nombre).toBe('El nombre es obligatorio.')
        expect(result.current.enviado).toBe(false)
    })

    it('debe marcar como enviado y limpiar el formulario cuando es valido', () => {
        const { result } = renderHook(() => useContactForm())
        act(() => {
            result.current.cambiar(escribir('nombre', 'Ana'))
        })
        act(() => {
            result.current.cambiar(escribir('correo', 'ana@correo.com'))
        })
        act(() => {
            result.current.cambiar(escribir('mensaje', 'Hola'))
        })
        act(() => {
            result.current.enviar(envio)
        })
        expect(result.current.enviado).toBe(true)
        expect(result.current.valores.nombre).toBe('')
    })
})
