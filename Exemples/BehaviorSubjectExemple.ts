import { BehaviorSubject, Observable } from "rxjs";

class UserService {
  private _users: User[] = [];
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  emit(): void {
    this.userSubject.next(Object.assign([], this._users));
  }

  clearUser() {
    this._users = [];
    this.emit();
  }
}

interface User {
  id: number;
  name: string;
}

// Utilisation
const userService = new UserService();

userService.user$.subscribe((user) => {
  console.log("Utilisateur:", user);
});

userService.clearUser();
