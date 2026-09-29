import { Component, inject } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Homeservice } from '../homeservice';
import { homeGuard } from '../home-guard';
import { RouterLink } from '@angular/router';
import {authservice} from '../auth';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {


private HomeService=inject(Homeservice);




}
