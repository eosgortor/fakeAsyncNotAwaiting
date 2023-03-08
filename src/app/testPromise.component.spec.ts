import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TestPromiseComponent } from './testPromise.component';

describe('Integration::HelloComponent', () => {
  it('should display original title', fakeAsync(() => {
    // given
    const { comp, el, fixture } = setup();

    // when
    fixture.detectChanges();
    tick();
    
    // then
    expect(comp.x).toBe(1);
  }));
});

//

function setup() {
  TestBed.configureTestingModule({
    declarations: [TestPromiseComponent],
  });

  const fixture = TestBed.createComponent(TestPromiseComponent);

  const comp = fixture.componentInstance;

  const de = fixture.debugElement;
  const el = de.nativeElement;

  return { comp, fixture, de, el };
}
