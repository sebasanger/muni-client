import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { apiUserAuthLogout } from 'src/app/store/auth/auth.actions';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { MenuItem } from 'src/app/interfaces/ui/menu.interface';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportacionComponent } from 'src/app/pages/importacion/importacion.component';

const page_title: string = environment.page_title;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public menuItems: MenuItem[];
  public adminMenuItems: MenuItem[];
  public user: User;
  public avatar: string;
  public title = page_title;
  public actualTitle: string;
  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private authStore: Store<{ auth: any }>,
    private titleService: Title,
    private translate: TranslateService
  ) {}
  ngOnInit(): void {
    this.authStore.select('auth').subscribe((data: any) => {
      if (data.user != null) {
        this.user = data.user;
        this.avatar = this.user.avatar;
        this.setTraductionsAndChargeMenu();
      }
    });
  }

  setTraductionsAndChargeMenu() {
    this.translate.stream('MENU').subscribe((res) => {
      if (res != undefined) {
        this.chargeMenu();
      }
    });
  }

  chargeMenu() {
    if (this.user != null) {
      this.menuItems = [
        {
          title: this.translate.instant('MENU.DASHBOARD'),
          icon: 'home',
          path: '../pages/dashboard',
        },
        {
          title: this.translate.instant('MENU.CHARTS'),
          icon: 'analytics',
          path: '../pages/charts',
        },
      ];

      if (this.user.roles.includes('ADMIN')) {
        this.menuItems.push(
          {
            title: this.translate.instant('MENU.USERS'),
            icon: 'people',
            path: '../pages/users',
          },
          {
            title: this.translate.instant('MENU.LIQUIDACIONES'),
            icon: 'chrome_reader_mode',
            path: '../pages/liquidaciones',
          }
        );

        this.adminMenuItems = [
          {
            title: this.translate.instant('MENU.TIPOSLIQUIDACIONES'),
            icon: 'view_list',
            path: '../pages/administration/tiposliquidaciones',
          },
          {
            title: this.translate.instant('MENU.AREAS'),
            icon: 'streetview',
            path: '../pages/administration/areas',
          },
        ];
      }
    }
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle + ' | ' + page_title);
    this.actualTitle = newTitle;
  }

  logout() {
    this.authStore.dispatch(apiUserAuthLogout());
  }

  openUploadModal() {
    this.dialog.open(ImportacionComponent, {
      width: '600px',
      height: '400px',
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
