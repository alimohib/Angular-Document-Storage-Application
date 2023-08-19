import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  documents: any[] = [];

  constructor(private documentService: DocumentService, private router: Router) {}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
  }

  goBackToUpload(): void {
    this.router.navigate(['/upload']);
  }
}
