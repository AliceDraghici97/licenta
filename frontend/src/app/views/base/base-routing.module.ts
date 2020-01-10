import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConturiContabileComponent } from './conturi_contabile.component';
import { NoteContabileComponent } from './note_contabile.component';
import { FacturiVanzareComponent } from './facturi_vanzare.component';
import { FacturiAprovizionareComponent } from './facturi_aprovizionare.component';
import { FacturiExportComponent } from './facturi_export.component';
import { FacturiRaportComponent } from './facturi_raport.component';
import { ParteneriDefinireComponent } from './parteneri_definire.component';
import { ParteneriRaportComponent } from './parteneri_raport.component';
import { CreareComandaComponent } from './creare_comanda.component';
import { DefinireAgentComponent } from './definire_agent.component';
import { DefinireMasinaComponent } from './definire_masina.component';
import { VanzariRaportComponent } from './vanzari_raport.component';
import { CerereOfertaComponent } from './cerere_oferta.component';
import { CalculNecesarComponent } from './calcul_necesar.component';
import { ContracteFurnizoriComponent } from './contracte_furnizori.component';
import { LocatiiComponent } from './locatii.component';
import { DefinireArticoleComponent } from './definire_articole.component';
import { TransferuriComponent } from './transferuri.component';
import { InventariereComponent } from './inventariere.component';
import { ProductieRaportComponent } from './productie_raport.component';
import { StocuriRaportComponent } from './stocuri_raport.component';
import { FisaMagazieComponent } from './fisa_magazie.component';
import { HomePageComponent } from './home_page.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'conturi_contabile'
      },
      {
        path: 'home_page',
        component: HomePageComponent,
        data: {
          title: 'Home Page'
        }
      },
      {
        path: 'conturi_contabile',
        component: ConturiContabileComponent,
        data: {
          title: 'Conturi Contabile'
        }
      },
      {
        path: 'note_contabile',
        component: NoteContabileComponent,
        data: {
          title: 'Note Contabile'
        }
      },
      {
        path: 'facturi_vanzare',
        component: FacturiVanzareComponent,
        data: {
          title: 'Facturi Vanzare'
        }
      },
      {
        path: 'facturi_aprovizionare',
        component: FacturiAprovizionareComponent,
        data: {
          title: 'Facturi Aprovizionare'
        }
      },
      {
        path: 'facturi_export',
        component: FacturiExportComponent,
        data: {
          title: 'Facturi Export'
        }
      },
      {
        path: 'facturi_raport',
        component: FacturiRaportComponent,
        data: {
          title: 'Raport Facturi'
        }
      },
      {
        path: 'parteneri_definire',
        component: ParteneriDefinireComponent,
        data: {
          title: 'Definire Parteneri'
        }
      },
      {
        path: 'parteneri_raport',
        component: ParteneriRaportComponent,
        data: {
          title: 'Raport Parteneri'
        }
      },
      {
        path: 'creare_comanda',
        component: CreareComandaComponent,
        data: {
          title: 'Creare Comanda'
        }
      },
      {
        path: 'definire_agent',
        component: DefinireAgentComponent,
        data: {
          title: 'Definire Agent'
        }
      },
      {
        path: 'definire_masina',
        component: DefinireMasinaComponent,
        data: {
          title: 'Definire Masina'
        }
      },
      {
        path: 'vanzari_raport',
        component: VanzariRaportComponent,
        data: {
          title: 'Raport Vanzari'
        }
      },
      {
        path: 'cerere_oferta',
        component: CerereOfertaComponent,
        data: {
          title: 'Cerere Oferta'
        }
      },
      {
        path: 'calcul_necesar',
        component: CalculNecesarComponent,
        data: {
          title: 'Calcul Necesar'
        }
      },
      {
        path: 'contracte_furnizori',
        component: ContracteFurnizoriComponent,
        data: {
          title: 'Contracte Furnizori'
        }
      },
      {
        path: 'locatii',
        component: LocatiiComponent,
        data: {
          title: 'Depozite si Locatii'
        }
      },
      {
        path: 'definire_articole',
        component: DefinireArticoleComponent,
        data: {
          title: 'Definire Articole'
        }
      },
      {
        path: 'transferuri',
        component: TransferuriComponent,
        data: {
          title: 'Transferuri'
        }
      },
      {
        path: 'inventariere',
        component: InventariereComponent,
        data: {
          title: 'Inventariere'
        }
      },
      {
        path: 'productie_raport',
        component: ProductieRaportComponent,
        data: {
          title: 'Raport Productie'
        }
      },
      {
        path: 'stocuri_raport',
        component: StocuriRaportComponent,
        data: {
          title: 'Raport Stocuri'
        }
      },
      {
        path: 'fisa_magazie',
        component: FisaMagazieComponent,
        data: {
          title: 'Fisa de Magazie'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }

/* import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
 */