import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private documents: any[] = [];

  getDocuments(): any[] {
    return this.documents;
  }

  uploadDocument(file: File): boolean {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5242880; // 5MB

    if (!allowedTypes.includes(file.type) || file.size > maxSize) {
      return false; 
    }

    const documentInfo = {
      id: this.generateId(), 
      name: file.name,
      size: this.formatSize(file.size),
      type: this.getDocumentType(file.type)
    };

    this.documents.push(documentInfo);
    return true;
  }

  getDocumentById(id: string): any {
    return this.documents.find(document => document.id === id);
  }

  private generateId(): string {
    return Date.now().toString();
  }

  private formatSize(size: number): string {
    const units = ['B', 'KB', 'MB', 'GB'];
    let i = 0;

    while (size >= 1024 && i < units.length - 1) {
      size /= 1024;
      i++;
    }

    return `${size.toFixed(2)} ${units[i]}`;
  }

  private getDocumentType(mimeType: string): string {
    if (mimeType === 'application/pdf') {
      return 'PDF';
    } else if (mimeType === 'application/msword' || mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return 'Word';
    } else {
      return 'Unknown';
    }
  }
}
