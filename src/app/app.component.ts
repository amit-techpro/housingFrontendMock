import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router, Event, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationStart, NavigationEnd } from '@angular/router';
import { UiService } from './services/ui/ui.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  public showLoader = 0;

  constructor(
    public ui: UiService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.ui.loader.show();
      } else if (event instanceof RouteConfigLoadEnd) {
        this.ui.loader.hide();
      }
    });
  }

  ngAfterViewChecked() {
    // if (this.showLoader !== this.ui._loaderCounter) {
    //   this.showLoader = this.ui._loaderCounter;
    this.cdRef.detectChanges();
    // }
  }
}