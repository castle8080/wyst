// Google's login API namespace
declare var gapi: any;

const CLIENT_ID = "365283410462-559ripgans9smueq9sa8bpbtqhra5go8.apps.googleusercontent.com";

export class Authentication {
  
    private auth2: any;
    private user: any;
    private userChangeHandlers: Array<() => void> = [];

    constructor() {
      gapi.load('auth2', () => { this.initSignin() });
    }

    public isSignedIn(): boolean {
      return (this.user != null) && this.user.isSignedIn();
    }

    public getUserName(): string {
      if (!this.isSignedIn()) {
        return null;
      }
      else {
        return this.user.getBasicProfile().getName();
      }
    }

    public getEmail(): string {
      if (!this.isSignedIn()) {
        return null;
      }
      else {
        return this.user.getBasicProfile().getEmail();
      }
    }

    public getIdToken(): string {
      if (!this.isSignedIn()) {
        return null;
      }
      else {
        return this.user.getAuthResponse().id_token;
      }
    }

    public onUserChange(cb: () => void) {
      this.userChangeHandlers.push(cb);
    }

    public signOut() {
      this.auth2.signOut().then(() => {
        console.log("Signed out.");
        this.user = null;
        this.fireUserChangeHandlers();
      });
    }

    private fireUserChangeHandlers() {
      //console.log("user changed: ", this.user);
      this.userChangeHandlers.forEach(cb => cb());
    }

    private initSignin(): void {
      this.auth2 = gapi.auth2.init({
        client_id: CLIENT_ID,
        scope: 'profile'
      });

      this.auth2.currentUser.listen((user) => {
          this.user = user;
          this.fireUserChangeHandlers();
      });
    }
}