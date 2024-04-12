import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatText' })
export class FormatTextPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Reemplazar <b> con <strong> para negrita
    let formattedText = value.replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>');

    // Reemplazar <i> con <em> para cursiva
    formattedText = formattedText.replace(/<i>(.*?)<\/i>/g, '<em>$1</em>');

    return formattedText;
  }
}
