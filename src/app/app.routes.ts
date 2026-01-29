import { Routes } from '@angular/router';
import { About } from './Ui/about/about';
import { Service } from './Ui/service/service';
import { Contact } from './Ui/contact/contact';
import { Home } from './Ui/home/home';
import { Product } from './Ui/product/product';
import { Singleview } from './Ui/singleview/singleview';
import { Cloud } from './Ui/cloud/cloud';
import { Cyber } from './Ui/cyber/cyber';
import { Data } from './Ui/data/data';
import { Dev } from './Ui/dev/dev';
import { Gis } from './Ui/gis/gis';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about' , component:About},
    {path:'service' , component:Service},
    {path:'contact' , component:Contact},
    {path:'product' , component:Product},
    {path:'singleview/:titileid', component:Singleview},
    {path:'cloud',component:Cloud},
    {path:'cyber',component:Cyber},
    {path:'data',component:Data},
    {path:'dev',component:Dev},
    {path:'gis',component:Gis},
    {path:'contact',component:Contact}
];


