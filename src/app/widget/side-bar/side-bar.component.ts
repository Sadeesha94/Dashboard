import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { SideMenuItemsService } from 'src/app/services/side-menu-items.service';

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {

  panelOpenState = false;

  menuItems: any = [];

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({ length: 20 }, (_, i) => this.menuItems);

  fillerContent = Array.from(
    { length: 5 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua.`
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataService: SideMenuItemsService) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.dataService.getJson("side-menu-items").subscribe(items => {
      this.menuItems = items;
    });
  }
}
