import {Component, HostListener, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  isScrolled = false;
  currentYear: number = 2025;

  @HostListener('window:scroll', [])
  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.onWindowScroll();
  }
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  protected readonly Date = Date;
}
