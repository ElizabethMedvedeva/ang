import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter(); //new EventEmitter<string>(); можно добавлять типизпцию


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
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

  //select = output<string>(); это замена декарейтеру @Output, не создаёт сигнал,
  //  а просто замена по синтаксису, в остальном так же, но использовать здесь не будем
  // так как это новый синтаксис, а мы всё по старому делаем

  onSelectUser() { 
    this.select.emit(this.user.id);
  }
}
