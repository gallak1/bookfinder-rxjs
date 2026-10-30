import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyBooklistWpp } from './empty-booklist-wpp';

describe('EmptyBooklistWpp', () => {
  let component: EmptyBooklistWpp;
  let fixture: ComponentFixture<EmptyBooklistWpp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyBooklistWpp],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyBooklistWpp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
