import { ViewEncapsulation } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { Editor } from '@tiptap/core';
import Bold from '@tiptap/extension-bold';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text';
import Paragraph from '@tiptap/extension-paragraph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public editor = new Editor({
    extensions: [StarterKit, Bold, Document, Text, Paragraph],
  })



}
