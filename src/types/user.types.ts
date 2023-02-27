export type User = {
    name: {
        first: string,
        last: string
    },
    email: string,
    picture:{
        medium:string,
    },
    login: {
        username: string;
      };
}