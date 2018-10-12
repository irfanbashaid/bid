import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { OwnerComponent } from './owner/owner.component';
import { CreateAuctionComponent } from './create-auction/create-auction.component';
import { ChangeownerComponent } from './changeowner/changeowner.component';
import { SetresultComponent } from './setresult/setresult.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { BidlogComponent } from './bidlog/bidlog.component';
import { WinhistoryComponent } from './winhistory/winhistory.component';
import { LiveauctionComponent } from './liveauction/liveauction.component';
import { ClosedauctionComponent } from './closedauction/closedauction.component';
import { UpcomingauctionComponent } from './upcomingauction/upcomingauction.component';
import { MeetwinnersComponent } from './meetwinners/meetwinners.component';


export const appRoutes: Routes = [
    {
        path: 'login',
        component:LoginComponent
      },
      {
        path: 'user',
        component: UserComponent
   
      },
      {
        path: 'owner',
        component:OwnerComponent
      },
      {
        path: 'createAuction',
        component:CreateAuctionComponent
      },
      {
        path: 'changeowner',
        component:ChangeownerComponent
      },
      {
        path: 'setresult',
        component:SetresultComponent
      },
      {
        path: 'myaccount',
        component:MyaccountComponent
      },
      {
        path: 'bidlog',
        component:BidlogComponent
      },
      {
        path: 'winhistory',
        component:WinhistoryComponent
      },
      {
        path: 'live',
        component:LiveauctionComponent
      },
      {
        path: 'closed',
        component:ClosedauctionComponent
      },
      {
        path: 'upcoming',
        component:UpcomingauctionComponent
      },
      {
        path: 'winners',
        component:MeetwinnersComponent
      },
      { 
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
];