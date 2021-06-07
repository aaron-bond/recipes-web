import { Injectable } from "@angular/core";

@Injectable()
export class UserService
{
    public LogInUser(username: string, password: string): boolean {

        if (username == "Admin")
        {
            return true;
        }

        return false;
    }
}