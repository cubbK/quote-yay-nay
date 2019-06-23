
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface IQuery {
    allQuotes(): Quote[] | Promise<Quote[]>;
    quotesByCompletedFlag(completed: boolean): Quote[] | Promise<Quote[]>;
    quote(id: number): Quote | Promise<Quote>;
    user(id: number): User | Promise<User>;
}

export interface Quote {
    date: string;
    content: string;
    author: string;
    numberOfUpVotes: number;
    numberOfDownVotes: number;
    completed: boolean;
    users: User[];
}

export interface User {
    google: string;
    votedQuotes: Quote[];
}
