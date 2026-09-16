import { Component, signal } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [NgbCollapse],
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
