
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import { BaseRoutingModule } from './base-routing.module';

// Components Routing
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollapseModule,
    BaseRoutingModule,
    ProgressbarModule.forRoot(),
    TabsModule,
    ChartsModule
  ],
  declarations: [
    ConturiContabileComponent,
    NoteContabileComponent,
    FacturiVanzareComponent,
    FacturiAprovizionareComponent,
    FacturiExportComponent,
    FacturiRaportComponent,
    ParteneriDefinireComponent,
    ParteneriRaportComponent,
    CreareComandaComponent,
    DefinireAgentComponent,
    DefinireMasinaComponent,
    VanzariRaportComponent,
    CerereOfertaComponent,
    CalculNecesarComponent,
    ContracteFurnizoriComponent,
    LocatiiComponent,
    DefinireArticoleComponent,
    TransferuriComponent,
    InventariereComponent,
    ProductieRaportComponent,
    StocuriRaportComponent,
    FisaMagazieComponent,
    HomePageComponent
  ]
})
export class BaseModule { }

/* // Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';

// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    CardsComponent,
    FormsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent
  ]
})
export class BaseModule { }
 */