import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Editor } from '@tiptap/core';
import Bold from '@tiptap/extension-bold';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnDestroy, OnInit{
  @Input() editor: Editor;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  title = 'editor';



  value = '<p>Hello, Tiptap!</p>';

}
