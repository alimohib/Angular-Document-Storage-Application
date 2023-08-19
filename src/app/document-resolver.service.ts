import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DocumentService } from './document.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentResolver implements Resolve<any> {
  constructor(private documentService: DocumentService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const documentId = route.params['id'];
    return this.documentService.getDocumentById(documentId);
  }
}
