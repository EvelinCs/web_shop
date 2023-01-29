import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div>Page Not Found!</div>
  `,
  styles: [
    'div { font-size: 100px; position: relative; top: 40%; text-align: center;}',
    '@media only screen and (max-width: 600px) { div {font-size: 50px; line-height: 60px;} }'
  ]
})
export class PageNotFoundComponent {

}
