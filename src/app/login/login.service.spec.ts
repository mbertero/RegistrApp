import { TestBed, async } from '@angular/core/testing';

import { LoginService } from './login.service';
import { LoginPage } from './login.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginService', () => {
   beforeEach(async() => {
   await TestBed.configureTestingModule({
    declarations : [LoginPage],
    providers : [LoginService],
    imports: [HttpClientTestingModule]
   }).compileComponents();
    
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
