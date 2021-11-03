import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'test';
  myControl = new FormControl();
  searchValue:string = '';
  clearSearch() {
    this.searchValue = '';
  }
  options: any[] = [
   'Boyan Krastenyakov',
   'Klaudia Shift',
   'James Pottah',
   'Jaden Smith',
   'Veronika Bright',
   'Veronika Kostadinova',
   'Peter Parker',
   'Nikolay Kopernik',
   'Bruce Wayne',
   'Spider Man',
   'Connor Mcgreggor',
   'William Shakespere',
   'Fernando Alonso',
   'Kimmy Raikonen',
   'Dimitar Berbatov',
   'Dimitar Penev',
   'Dimitar Dimov',
   'Dimitar Aleksiev',
   'Ivan Rilski',
   'Ivan Vazov',
   'Ivan Ivanov',
  ];
  
  // Observables
  filteredOptions: Observable<string[]> | undefined;
  filteredOptionsLength: Observable<any> | undefined;
  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterUsers(value))
    );
      
    this.filteredOptionsLength = this.myControl.valueChanges
    .pipe(
      map(value => this._filterLength(value))
    );
  }
  // returns input search results
  private _filterUsers(value: string): string[] {
    const filterValue = value.toLowerCase();
    const results = this.options.filter(option => option.toLowerCase().includes(filterValue))
    
    return results;
  }
  // returns length of search results
  private _filterLength(value: any): any {
    const filterValue = value.toLowerCase();
    const results = this.options.filter(option => option.toLowerCase().includes(filterValue))
  
    return results.length;
  }
}

