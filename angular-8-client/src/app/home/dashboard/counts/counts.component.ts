import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared-module/Services/utils/utils.service';

@Component({
  selector: 'app-dashboard-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss'],
})
export class CountsComponent implements OnInit {
  @Input() bookedAppooinment;
  @Input() unBookedAppoinment;
  constructor(private router: Router, private utils: UtilsService) {}

  ngOnInit(): void {}
  gotoWithPage(url) {
    this.router.navigateByUrl(url);
  }
  numberConvertIndianCurrency(data) {
    return this.utils.numberConvertIndianCurrency(data);
  }
}
