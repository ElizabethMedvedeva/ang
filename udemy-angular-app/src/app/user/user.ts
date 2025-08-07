import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  @Input({ required: true}) id!: string
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();


  get imagePath() {
    return 'assets/users/' + this.avatar;
  }


  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })
  // это для использования через signal, 
  // но дальше мы использовать не будем такую версию,
  // так как вариант для часто используемых и 
  // старых вариантов через декоратор (смотри выше, лекция 32)

  onSelectUser() { 
    console.log("TUTA")
    this.select.emit(this.id);
  }
}
