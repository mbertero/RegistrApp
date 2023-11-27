import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProfesoresPage } from './profesores.page';
import { ProfesoresService } from '../state/profesores.service';
import { StateService } from '../state/state.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfesoresPage', () => {
  let component: ProfesoresPage;
  let fixture: ComponentFixture<ProfesoresPage>;
  let profesoresService: ProfesoresService;
  let stateService: StateService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresPage],
      imports: [HttpClientTestingModule],
      providers: [
        ProfesoresService,
        StateService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesoresPage);
    component = fixture.componentInstance;
    profesoresService = TestBed.inject(ProfesoresService);
    stateService = TestBed.inject(StateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  // Puedes agregar más pruebas según sea necesario
});
