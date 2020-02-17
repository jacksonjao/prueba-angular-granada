export class BookModel {
  ID: number;
  Title: string;
  Description: string;
  PageCount: number;
  Excerpt: string;
  PublishDate: string;
  uploadImage: string;
  constructor() {
    this.Title = 'Cargando Título';
    this.Description = 'Cargando Descripción';
    this.Excerpt = 'Cargando Extracto';
    this.PublishDate = '0000-00-00T00:00:00.0+00:00';
    this.uploadImage = '';
  }
}
