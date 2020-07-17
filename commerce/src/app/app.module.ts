import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';
import { FriendsModule } from './friends/friends.module';
import { InventoryModule } from './inventory/inventory.module';
import { MediaModule } from './media/media.module';
import { WarrantyModule } from './warranty/warranty.module';
import { SocialAccountModule } from './social-account/social-account.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotesModule,
    UsersModule,
    FriendsModule,
    InventoryModule,
    MediaModule,
    WarrantyModule,
    SocialAccountModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
