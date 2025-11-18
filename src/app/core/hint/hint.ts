import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  NgZone,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import tippy, { Instance } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.html',
  styleUrls: ['./hint.scss']
})
export class HintComponent implements AfterViewInit, OnDestroy {
  @ViewChild('helpBtn', { static: true }) helpBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('contentDefault', { static: true }) contentDefault!: ElementRef<HTMLElement>;
  @ViewChild('contentAbout', { static: true }) contentAbout!: ElementRef<HTMLElement>;
  @ViewChild('contentEducation', { static: true }) contentEducation!: ElementRef<HTMLElement>;
  @ViewChild('contentExperience', { static: true }) contentExperience!: ElementRef<HTMLElement>;
  @ViewChild('contentSkills', { static: true }) contentSkills!: ElementRef<HTMLElement>;
  @ViewChild('contentDrive', { static: true }) contentDrive!: ElementRef<HTMLElement>;
  @ViewChild('contentContact', { static: true }) contentContact!: ElementRef<HTMLElement>;

  private tippyInstance: Instance | null = null;
  private routeSub: Subscription | null = null;
  private isBrowser: boolean;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      this.tippyInstance = tippy(this.helpBtn.nativeElement, {
        content: this.getContentForUrl(this.router.url).cloneNode(true) as HTMLElement, // clonar para no mover el nodo angular
        allowHTML: true,
        interactive: true,
        placement: 'bottom-end',
        animation: 'shift-away',
        theme: 'light-border',
        maxWidth: 360,
        trigger: 'click',              // abre con click por defecto
        appendTo: document.body        // evita problemas de stacking / clipping por parents
        });
    });

    this.routeSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const newContent = this.getContentForUrl(event.urlAfterRedirects);
        this.updateContent(newContent);
        // descomentarlo si quieres que abra siempre al navegar:
        // this.tippyInstance?.show();
      }
    });
  }

  private getContentForUrl(url: string): HTMLElement {
    // Ajusta estos prefijos según tus rutas reales
    if (url.startsWith('/about')) return this.contentAbout.nativeElement;
    if (url.startsWith('/education')) return this.contentEducation.nativeElement;
    if (url.startsWith('/experience')) return this.contentExperience.nativeElement;
    if (url.startsWith('/skills')) return this.contentSkills.nativeElement;
    if (url.startsWith('/drive')) return this.contentDrive.nativeElement;
    if (url.startsWith('/contact')) return this.contentContact.nativeElement;
    if (url === '/' || url.startsWith('/home')) return this.contentAbout.nativeElement;
    return this.contentDefault.nativeElement;
  }

  private updateContent(newContent: HTMLElement) {
    if (!this.tippyInstance) return;
    this.ngZone.runOutsideAngular(() => {
        // usa cloneNode para mantener el template original en el DOM
        this.tippyInstance?.setContent(newContent.cloneNode(true) as HTMLElement);
    });
    }

  toggle() {
    if (!this.tippyInstance) return;
    if (this.tippyInstance.state.isShown) this.tippyInstance.hide();
    else this.tippyInstance.show();
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
    this.tippyInstance?.destroy();
  }
}