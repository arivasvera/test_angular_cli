import {Component, Input, OnInit} from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.css']
})
export class CategoryTreeComponent implements OnInit {

  @Input() categories: Category[];

  constructor() { }

  ngOnInit() { }

}
