
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-await',
  template: `<h1>TestAwait</h1>`,
})
export class TestAwaitComponent implements OnInit {
  x = -1;

  async ngOnInit(): Promise<void> {
    const xLocal = await Promise.resolve(1);
    this.x = xLocal;
  }
}
