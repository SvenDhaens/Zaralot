import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'zaralot-footer',
  template: `
  <footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Zaralot</strong> by <a href="mailto:svendhaens@gmail.com">Zaraul (Sven Dhaens)</a>.
      </p>
    </div>
  </div>
</footer>
`,
  styleUrls: []
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
