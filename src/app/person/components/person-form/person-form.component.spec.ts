import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonFormComponent } from './person-form.component';

describe('PersonFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PersonFormComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PersonFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
