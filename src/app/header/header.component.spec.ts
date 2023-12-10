import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { StateService } from '../state/state.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

let dynamicTitle = 'title'
let dynamicName = 'name'

class StateServiceMock extends StateService {
  private title: string = dynamicTitle
  private name : string = dynamicName

  override get getTitulo() {
    return of(this.title)
  }
  override get getNombre() {
    return of(this.name)
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [ 
        { provide: StateService, useClass: StateServiceMock } 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });

  it('get title', () => {
    expect(component.titulo).toEqual(dynamicTitle)
  });
  it('get name ', () => {
    expect(component.nombre).toEqual(dynamicName)
  });

});
