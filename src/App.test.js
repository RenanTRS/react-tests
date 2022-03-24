import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'

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
})