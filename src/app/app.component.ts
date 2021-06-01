import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiquidacionService } from './services/EntityServices/liquidacion.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sangular';

  constructor(private liquidacionService: LiquidacionService) {}

  ngOnInit() {
    this.liquidacionService.getAll().subscribe((res) => {
      console.log(res);
    });
  }
}
