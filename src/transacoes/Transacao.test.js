import React from 'react'
import {render} from '@testing-library/react'
import Transacao from './Transacao'
import Transacoes from './Transacoes'

describe('Componente de transação do extrato', ()=>{
    it('O Snapshot do componente deve permanecer sempre o mesmo', () => {

        const {container} = render(<Transacao data="08/09/2020" tipo="saque" valor="20.00"/>)
        expect(container.firstChild).toMatchSnapshot()
    })

    describe('Componente transações', () => {
        it('O snapshot do componente deve sempre renderizar', () => {

            const transacoes = [
                {
                    id: 1,
                    transacao: "saque",
                    valor: "15.00",
                    data: "08/09/2020",
                },
                {
                    id: 2,
                    transacao: "desposito",
                    valor: "20.00",
                    data: "09/09/2021"
                }
            ]
            const {container} = render(<Transacoes transacoes={transacoes} />)
            expect(container.firstChild).toMatchSnapshot()
        })
    })
})