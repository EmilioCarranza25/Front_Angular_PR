import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  typeDocument: string[] = ['Cédula de Ciudadania', 'Pasaporte'];
  disabledBottun: boolean = true;
  mymodel: any;
  value: string = '';
  constructor(private router: Router, private homeComponent: HomeComponent) {}

  // formSearch: FormGroup = this.fb.group({
  //   numberCC: ['', Validators.required],
  //   typeCC: ['', , Validators.required],
  // });
  ngOnInit(): void {}

  alerta(value: any) {
    if (value !== null) {
      this.disabledBottun = false;
    }
  }

  valuechange(newValue: any) {
    if (newValue !== undefined) {
      this.disabledBottun = false;
    }
    this.mymodel = newValue;
    console.log(newValue);
  }

  submitPage() {
    this.homeComponent.nextStep();
  }
}
