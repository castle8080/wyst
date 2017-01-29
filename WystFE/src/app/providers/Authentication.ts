// Google's login API namespace
declare var gapi: any;

const CLIENT_ID = "365283410462-559ripgans9smueq9sa8bpbtqhra5go8.apps.googleusercontent.com";

export class Authentication {
  
    private auth2: any;
    private user: any;

    constructor() {
        gapi.load('auth2', () => { this.initSignin() });
    }

    public isSignedIn(): boolean {
      return this.user != null;
    }

    public getUser(): any {
        return this.user;
    }

    private initSignin() {
        console.log("initSignin");

        this.auth2 = gapi.auth2.init({
            client_id: CLIENT_ID,
            scope: 'profile'
        });
        
        this.auth2.isSignedIn.listen((signInState) => {
        });

        this.auth2.currentUser.listen((user) => {
            this.user = user;
            console.log("User: ", user);
        });

        // Sign in the user if they are currently signed in.
        if (this.auth2.isSignedIn.get() == true) {
            this.auth2.signIn();
        }
    }
}