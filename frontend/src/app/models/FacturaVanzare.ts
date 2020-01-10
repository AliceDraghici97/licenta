export interface FacturaVanzare {
    denumireClient: string;
    CUIClient: string;
    stradaClient: string;
    orasClient: string;
    codPostalClient: string;
    taraClient: string;
    bancaClient: string;
    contBancarClient: string;
    codProdus: number;
    denumireProdus: string;
    cantitateProdus: number;
    unitMasuraProdus: number;
    pretTotalProdus: number;
    dataFactura: Date;
    numeAgent: string;
    telefonAgent: string;
}