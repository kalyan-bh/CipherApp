import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoalphabeticCipherComponent } from './monoalphabetic-cipher.component';

describe('MonoalphabeticCipherComponent', () => {
  let component: MonoalphabeticCipherComponent;
  let fixture: ComponentFixture<MonoalphabeticCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonoalphabeticCipherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonoalphabeticCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
