import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `'<div style="text-align:center">
  <h2>MarvellousInfosystems:<input type="text" name="name"></h2>
</div>'`,
  styles: [`input[type=text] {
 
    background-color: blue;
    color:red;
    width: 20%;
}`]
})
export class AppComponent {
  title = '';
}
