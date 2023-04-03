import { Component, Input } from '@angular/core';
import { Editor } from '@tiptap/core';


enum TextModifiers {
  Bold,
  Italic
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input()
  public editor: Editor;
  mods: typeof TextModifiers = TextModifiers;
  public activeMod: Number;  

  constructor(){

  }

  public toggleBold(){
    this.activeMod = this.mods.Bold;
    this.editor.chain().focus().toggleBold().run()
  }

  public toggleItalic() {
    this.activeMod = this.mods.Italic;
    this.editor.chain().focus().toggleItalic().run()
  }

  public isModActive(mod: Number) {
    return this.activeMod == mod
  }
}

