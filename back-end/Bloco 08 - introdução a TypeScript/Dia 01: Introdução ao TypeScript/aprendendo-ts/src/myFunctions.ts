// 1 - Sua primeira função receberá uma lista de perfis do GitHub, como a definida no arquivo data.ts, e retornará uma lista contendo apenas os valores da propriedade name

import { User } from "../types/User";

export const getUserNames = (userList: Array<User>): string[] => userList.map((user: User) => user.name);

// 2 - A segunda função receberá uma lista do tipo User e um número. Além disso, ela verificará quais perfis da lista recebida têm, no mínimo, o número de repositórios igual ao do passado como argumento, retornando uma lista com os perfis que satisfizerem a verificação

export const getUseMinRepo = (userList: User[], repo: number): string[] => userList.filter((user: User) => user.repositories >= repo).map((userFilter: User) => userFilter.name);

// 3 - Por fim, haverá uma função que será responsável por verificar se uma pessoa é a mais ativa da lista de usuárias do GitHub. Essa validação será feita com base na comparação da quantidade de repositórios que cada pessoa possui. Será considerada a pessoa mais ativa, neste exemplo, a que tiver o maior número de repositórios. Por isso, a função receberá o nome de uma pessoa do tipo User e uma lista, também do tipo User, em que a pessoa esteja incluída. O retorno da função deve ser um boolean (true ou false).

/* export const moreActive = (name: string, users: User[]) => {
    const chosenUser = users.find((user: User) => user.name = name)?.repositories;
    if (typeof chosenUser !== 'number') {
        chosenUser === 0;
    }
    const result = users.some((user: User) => user.repositories > chosenUser)
    return result
} */

export const moreActive = (name: string, users: User[]): boolean => {
    const mostActiveUser = users.reduce(
      (prev, curr) => 
        (prev.repositories > curr.repositories ? prev : curr),
    );
    return mostActiveUser.name === name;
  };