import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-promise',
  template: `<h1>TestPromise</h1>`,
})
export class TestPromiseComponent implements OnInit {
  x = -1;

  ngOnInit(): void {
    Promise.resolve(1).then((res) => {
      this.x = 1;
    });
  }
}
