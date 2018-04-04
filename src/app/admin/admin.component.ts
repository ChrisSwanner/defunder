import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AuthService]
})
export class AdminComponent {

  constructor(private authService: AuthService) { }

}
