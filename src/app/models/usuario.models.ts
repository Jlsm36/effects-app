

export class Usuario{
    id        : string;
    email     : string;
    first_name: string;
    last_name : string;
    avatar    : string;

    constructor(id: string, email: string, first_name: string, last_name: string, avatar: string) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }
}