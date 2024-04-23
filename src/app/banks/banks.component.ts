import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { BANKS } from '../banks';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-banks',
  standalone: true,
  imports: [NgFor],
  templateUrl: './banks.component.html',
  styleUrl: './banks.component.css'
})
export class BanksComponent implements OnInit { 
  banks = BANKS; 
  selectedBank!: Bank;

  constructor() { }

  onSelect(bank: Bank): void { 
   this.selectedBank = bank; 
  }

  ngOnInit():  void{
  }
}