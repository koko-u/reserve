import { Component, signal } from '@angular/core';
import { NgbCollapse, NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [
    NgbCollapse,
    RouterLinkActive,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    RouterLink,
  ],
  selector: 'rv-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  /**
   * ナビゲーションバーが折り畳まれているかどうかを示す。
   * リアクティブな状態でハンバーガーとなった状態で初期状態は閉じている
   */
  protected readonly isCollapsed = signal(true);
}
