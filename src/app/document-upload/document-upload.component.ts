import { Component } from '@angular/core';
import { DocumentService } from '../document.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent {
  selectedFile: File | null = null;
  fileError = '';

  constructor(private documentService: DocumentService, private router: Router) {}

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
    this.fileError = '';
  }

  uploadDocument(event: Event): void {
    event.preventDefault();

    if (!this.selectedFile) {
      this.fileError = 'Please choose a file to upload.';
      return;
    }

    if (this.selectedFile) {
      const uploadResult = this.documentService.uploadDocument(this.selectedFile);
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5242880; // 5MB
  
      if (!allowedTypes.includes(this.selectedFile.type)) {
        this.fileError = 'Invalid file type. Please choose a PDF or Word document.';
        return;
      }
  
      if (this.selectedFile.size > maxSize) {
        this.fileError = 'File size exceeds the maximum allowed limit (5MB).';
        return;
      }
  
      if (uploadResult) {
        this.selectedFile = null;
        this.fileError = '';
        
        this.router.navigate(['/dashboard']);
      } else {
        this.fileError = 'Invalid file type or size.';
      }
    }
  }
}
