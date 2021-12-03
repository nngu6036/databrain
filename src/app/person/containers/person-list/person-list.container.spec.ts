import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonListContainer } from './person-list.container';

describe('PersonListContainer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PersonListContainer
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PersonListContainer);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
