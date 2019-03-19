import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Neo4jNodeComponent } from './neo4j-node.component';

describe('Neo4jNodeComponent', () => {
  let component: Neo4jNodeComponent;
  let fixture: ComponentFixture<Neo4jNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Neo4jNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Neo4jNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
