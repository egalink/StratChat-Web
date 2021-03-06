import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';

const routes: Routes = [
    { path: '', component: ChatWindowComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
