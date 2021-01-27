import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ak-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() width = 'full';

  cardOpen = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    document.getElementById('content').style.height =
      document.getElementById('content').scrollHeight + 'px';
  }

  toggleCollapse() {
    if (this.cardOpen) {
      this.closeCard();
    } else {
      this.openCard();
    }
  }

  closeCard() {
    this.cardOpen = false;
    document.getElementById('content').style.height = '0';
  }

  openCard() {
    this.cardOpen = true;
    document.getElementById('content').style.height =
      document.getElementById('content').scrollHeight + 'px';
  }
}
