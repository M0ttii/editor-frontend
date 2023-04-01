import { Component, Input } from '@angular/core';
import { Editor } from '@tiptap/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input()
  public editor: Editor;

  constructor(){

  }

  public toggleBold(){
    console.log("Bold")
    this.editor.chain().focus().toggleBold().run()
  }

}
