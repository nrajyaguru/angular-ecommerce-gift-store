import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  cartItemCount: number = 0;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItemsObservable().subscribe((items) => {
      this.cartItemCount = Array.from(items.values()).reduce(
        (sum, quantity) => sum + quantity,
        0
      );
    });
  }
}
