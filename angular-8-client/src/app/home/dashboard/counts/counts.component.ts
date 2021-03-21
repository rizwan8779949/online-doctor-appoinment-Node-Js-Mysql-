import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { DashboardData } from '../dashboard.component';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';

@Component({
  selector: 'app-dashboard-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss'],
})
export class CountsComponent implements OnInit {
  @Input() meetings;
  @Input() referrals;
  @Input() amount;
  @Input() visitor;
  @Input() testimonials;
  @Input() duration: number;
  @Input() digit: number;
  @Input() steps: number;
  constructor(private router: Router, private utils: UtilsService) {}

  ngOnInit(): void {}
  gotoWithPage(url) {
    this.router.navigateByUrl(url);
  }
  numberConvertIndianCurrency(data) {
    return this.utils.numberConvertIndianCurrency(data);
  }

  animateCount() {
    if (!this.duration) {
      this.duration = 1000;
    }

    if (typeof this.meetings === 'number') {
      this.counterFunc(
        this.meetings ? this.meetings : 0,
        this.duration,
        'meetings'
      );
    }
    if (typeof this.referrals === 'number') {
      this.counterFunc(
        this.referrals ? this.referrals : 0,
        this.duration,
        'referrals'
      );
    }
    if (typeof this.amount === 'number') {
      this.counterFunc(this.amount ? this.amount : 0, this.duration, 'amount');
    }
    if (typeof this.visitor === 'number') {
      this.counterFunc(
        this.visitor ? this.visitor : 0,
        this.duration,
        'visitor'
      );
    }
    if (typeof this.testimonials === 'number') {
      this.counterFunc(
        this.testimonials ? this.testimonials : 0,
        this.duration,
        'testimonials'
      );
    }
  }

  counterFunc(endValue, durationMs, type) {
    if (!this.steps) {
      this.steps = 12;
    }

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;
      if (type == 'meetings')
        document.getElementById('meetings').innerText = String(
          Math.abs(Math.floor(currentValue))
        );
      if (type == 'referrals')
        document.getElementById('referrals').innerText = String(
          Math.abs(Math.floor(currentValue))
        );
      if (type == 'amount')
        document.getElementById('amount').innerText = String(
          Math.abs(Math.floor(currentValue))
        );
      if (type == 'visitor')
        document.getElementById('visitor').innerText = String(
          Math.abs(Math.floor(currentValue))
        );
      if (type == 'testimonials')
        document.getElementById('testimonials').innerText = String(
          Math.abs(Math.floor(currentValue))
        );
      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngAfterViewInit() {
    if (this.meetings) {
      this.animateCount();
    }
    if (this.referrals) {
      this.animateCount();
    }
    if (this.amount) {
      this.animateCount();
    }
    if (this.visitor) {
      this.animateCount();
    }
    if (this.testimonials) {
      this.animateCount();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['digit']) {
    //   this.animateCount();
    // }
    if (changes['meetings']) {
      this.animateCount();
    }
    if (changes['referrals']) {
      this.animateCount();
    }
    if (changes['amount']) {
      this.animateCount();
    }
    if (changes['visitor']) {
      this.animateCount();
    }
    if (changes['testimonials']) {
      this.animateCount();
    }
  }
}
