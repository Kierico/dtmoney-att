import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
                <SearchForm />
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 12.000,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>05/09/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Temaki</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 27,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>05/09/2022</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    );
}