import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { ProfesoresService } from '../state/profesores.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;
  let activatedRoute: ActivatedRoute;
  let profesoresService: ProfesoresService;
  let stateService: StateService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: jasmine.createSpy('get').and.returnValue('some_id')
              }
            }
          }
        },
        ProfesoresService,
        StateService
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    profesoresService = TestBed.inject(ProfesoresService);
    stateService = TestBed.inject(StateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
