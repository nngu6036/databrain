import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonFormContainer } from './person-form.container';

describe('PersonFormContainer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PersonFormContainer
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PersonFormContainer);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
