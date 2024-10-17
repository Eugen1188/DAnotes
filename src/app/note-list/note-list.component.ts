import { Component } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { NoteListService } from '../firebase-services/note-list.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';




@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [FormsModule, CommonModule, NoteComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent {
  noteList: Note[] = [];
  favFilter: "all" | "fav" = "all";
  status: "notes" | "trash" = "notes";

  constructor(private noteService: NoteListService) {
  }

  // async fillNoteList() {

  //   await this.noteService.subNotesList();
  //   if (this.noteService.normalNotes) {

  //     console.log(this.status);
  //     for (let i = 0; i < this.noteService.normalNotes.length; i++) {
  //       const element = this.noteService.normalNotes[i];
  //       this.noteList.push(element);
  //       console.log(element);
  //     }
  //   }

  // }



  getList(status: 'notes' | 'trash'): Note[] {
    if (status == 'notes') {
      this.fillNoteList();
      console.log(this.noteList);
        return this.noteList;
    }else {
        return this.noteService.trashNotes;
    }
 }


  fillNoteList() {
    for (let i = 0; i < this.noteService.normalNotes.length; i++) {
      const element = this.noteService.normalNotes[i];
      this.noteList.push(element);
    }
  }

  changeFavFilter(filter:"all" | "fav"){
    this.favFilter = filter;
  }

  changeTrashStatus(){
    if(this.status == "trash"){
      this.status = "notes";
    } else {
      this.status = "trash";
      this.favFilter = "all";
    }
  }



}
