import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import App, {calcularNovoSaldo} from './App'
//import { fireEvent } from '@testing-library/react/dist/pure'

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

            const saqueSaldo = calcularNovoSaldo(valores, 100) // usa uma função pura com os parâmetros necessários
            expect(saqueSaldo).toBe(50)
        })
        it('que é um saque, a transação deve ser realizada', () => {
            const {getByText, getByLabelText, getByTestId} = render(<App />)

            const saldo = getByText('R$ 1000')
            const transacao = getByLabelText('Saque')
            const valor = getByTestId('valor')
            const btnTransacao = getByText('Realizar operação')
            
            expect(saldo.textContent).toBe('R$ 1000')
            fireEvent.click(transacao, {target: {value: 'saque'}})
            fireEvent.change(valor, {target: {value: 10}})
            fireEvent.click(btnTransacao)
            
            expect(saldo.textContent).toBe('R$ 990')
        })
        it('que é um saque, saque com um valor a mais', () => {
            const {getByText, getByLabelText, getByTestId} = render(<App />)

            const saldo = getByText('R$ 1000')
            const transacao = getByLabelText('Saque')
            const valor = getByTestId('valor')
            const btnTransacao = getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000')
            fireEvent.click(transacao, {target: {value: 'saque'}})
            fireEvent.change(valor, {target: {value: 1100}})
            fireEvent.click(btnTransacao)

            expect(saldo.textContent).toBe('R$ -100')
        })
        it('que é um depósito, o valor vai aumentar', () => {
            const valores = {
                transacao: 'desposito',
                valor: 10
            }
            
            const depositoSaldo = calcularNovoSaldo(valores, 50) // usa uma função pura com os parâmetros necessários
            expect(depositoSaldo).toBe(40)
        })
    }) //Fim - Quando eu realizo uma transação
})