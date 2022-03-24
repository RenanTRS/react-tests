import React from 'react'
import {render, screen} from '@testing-library/react'
import App, {calcularNovoSaldo} from './App'

describe('Componente principal', () => {
    describe('Quando eu abro o app do banco', () =>{
        it('O nome é exibido', () => {
            /*Uma outra forma de fazer:
            const {getByText} = render(<App />)
            expect(getByText('ByteBank')).toBeInTheDocument()
            */
           render(<App />)
           expect(screen.getByText('ByteBank')).toBeInTheDocument()
    
        })
        it('O saldo é exibido', () => {
            /*Uma outra forma de fazer:
            const {getByText} = render(<App />)
            expect(getByText('Saldo:')).toBeInTheDocument()
            */
           
           render(<App />)
           expect(screen.getByText('Saldo:')).toBeInTheDocument()
        })
        it('O botão de transação é exibido', () => {
            /*Uma outra forma de fazer:
            const {getByText} = render(<App />)
            expect(getByText('Realizar operação')).toBeInTheDocument()
            */

           render(<App />)
           expect(screen.getByText('Realizar operação')).toBeInTheDocument()
        })
    }) //Fim - Quando eu abro o app do banco
    describe('Quando eu realizo uma transação', () => {
        it('que é um saque, o valor vai diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }

            const saqueSaldo = calcularNovoSaldo(valores, 100)
            expect(saqueSaldo).toBe(50)
        })
        it('que é um depósito, o valor vai aumentar', () => {
            const valores = {
                transacao: 'desposito',
                valor: 10
            }
            
            const depositoSaldo = calcularNovoSaldo(valores, 50)
            expect(depositoSaldo).toBe(40)
        })
    }) //Fim - Quando eu realizo uma transação
})