import { TestBed } from '@angular/core/testing';
import { AppResult } from './app.result';

describe('app.result', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppResult
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppResult);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular-Empty-Project'`, () => {
    const fixture = TestBed.createComponent(AppResult);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular-Empty-Project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppResult);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Angular-Empty-Project app is running!');
  });
});
