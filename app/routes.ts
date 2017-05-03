import { Routes } from '@angular/router'
import { EventslistComponent } from './events/events-list.components'
import { EventDetailsComponent } from 
'./events/event-details/event-details.component'
export const appRoutes:Routes = [
    {path: 'events', component: EventslistComponent},
    {path: 'events/:id', component:EventDetailsComponent},
    {path:'', redirectTo: '/events', pathMatch: 'full'}
]