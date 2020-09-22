import { Injectable } from "@angular/core";

export class Employee {
  text: string;
  userID: number;
}

export class Data {
  key: number;
  summary: string;
  userID: number;
  startDate: Date;
  endDate: Date;
}

@Injectable()
export class Service {
  getEmployees() {
    return employees;
  }
  getAppointments() {
    return appointments;
  }
}

let employees: Employee[] = [
  { userID: 1, text: "Alejandra Camino" },
  { userID: 2, text: "Alexander Feuer" },
  { userID: 3, text: "Ana Trujillo" },
  { userID: 4, text: "Anabela Domingues" },
  { userID: 5, text: "Andre Fonseca" },
  { userID: 6, text: "Ann Devon" },
  { userID: 7, text: "Annette Roulet" },
  { userID: 8, text: "Antonio Moreno" },
  { userID: 9, text: "Aria Cruz" },
  { userID: 10, text: "Art Braunschweiger" },
  { userID: 11, text: "Bernardo Batista" },
  { userID: 12, text: "Carine Schmitt" },
  { userID: 13, text: "Carlos Gonzalez" },
  { userID: 14, text: "Carlos Hernandez" },
  { userID: 15, text: "Catherine Dewey" },
  { userID: 16, text: "Christina Berglund" },
  { userID: 17, text: "Daniel Tonini" },
  { userID: 18, text: "Diego Roel" },
  { userID: 19, text: "Dominique Perrier" },
  { userID: 20, text: "Eduardo Saavedra" },
  { userID: 21, text: "Elizabeth Brown" },
  { userID: 22, text: "Elizabeth Lincoln" },
  { userID: 23, text: "Felipe Izquierdo" },
  { userID: 24, text: "Fran Wilson" },
  { userID: 25, text: "Francisco Chang" },
  { userID: 26, text: "Frederique Citeaux" },
  { userID: 27, text: "Georg Pipps" },
  { userID: 28, text: "Giovanni Rovelli" },
  { userID: 29, text: "Guillermo Fernandez" },
  { userID: 30, text: "Hanna Moos" }
];

let appointments: Data[] = [
  {
    key: 1,
    userID: 1,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:55:00+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 2,
    userID: 1,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:40:00+02:00"),
    summary: "P0015800158 - P0015800158"
  },
  {
    key: 3,
    userID: 1,
    startDate: new Date("2020-09-22T09:15:01+02:00"),
    endDate: new Date("2020-09-22T09:50:01+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 4,
    userID: 1,
    startDate: new Date("2020-09-22T09:20:01+02:00"),
    endDate: new Date("2020-09-22T10:00:01+02:00"),
    summary: "P0015900159 - P0015900159"
  },
  {
    key: 5,
    userID: 1,
    startDate: new Date("2020-09-22T10:40:02+02:00"),
    endDate: new Date("2020-09-22T11:30:02+02:00"),
    summary: "P0016000160 - P0016000160"
  },
  {
    key: 6,
    userID: 1,
    startDate: new Date("2020-09-22T12:10:03+02:00"),
    endDate: new Date("2020-09-22T13:20:03+02:00"),
    summary: "P0016100161 - P0016100161"
  },
  {
    key: 7,
    userID: 1,
    startDate: new Date("2020-09-22T14:00:04+02:00"),
    endDate: new Date("2020-09-22T14:30:04+02:00"),
    summary: "P0016200162 - P0016200162"
  },
  {
    key: 8,
    userID: 1,
    startDate: new Date("2020-09-22T14:30:07+02:00"),
    endDate: new Date("2020-09-22T15:20:07+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 9,
    userID: 1,
    startDate: new Date("2020-09-22T15:10:06+02:00"),
    endDate: new Date("2020-09-22T15:40:06+02:00"),
    summary: "P0016300163 - P0016300163"
  },
  {
    key: 10,
    userID: 1,
    startDate: new Date("2020-09-22T16:20:06+02:00"),
    endDate: new Date("2020-09-22T16:55:06+02:00"),
    summary: "P0016400164 - P0016400164"
  },
  {
    key: 11,
    userID: 2,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:05:00+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 12,
    userID: 2,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:35:00+02:00"),
    summary: "P0024200242 - P0024200242"
  },
  {
    key: 13,
    userID: 2,
    startDate: new Date("2020-09-22T09:15:00+02:00"),
    endDate: new Date("2020-09-22T10:10:00+02:00"),
    summary: "P0024300243 - P0024300243"
  },
  {
    key: 14,
    userID: 2,
    startDate: new Date("2020-09-22T10:50:01+02:00"),
    endDate: new Date("2020-09-22T12:10:01+02:00"),
    summary: "P0024400244 - P0024400244"
  },
  {
    key: 15,
    userID: 2,
    startDate: new Date("2020-09-22T12:50:02+02:00"),
    endDate: new Date("2020-09-22T14:00:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 16,
    userID: 2,
    startDate: new Date("2020-09-22T14:40:04+02:00"),
    endDate: new Date("2020-09-22T15:55:04+02:00"),
    summary: "P0024500245 - P0024500245"
  },
  {
    key: 17,
    userID: 2,
    startDate: new Date("2020-09-22T16:35:05+02:00"),
    endDate: new Date("2020-09-22T17:35:05+02:00"),
    summary: "P0024600246 - P0024600246"
  },
  {
    key: 18,
    userID: 3,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:30:00+02:00"),
    summary: "P0032100321 - P0032100321"
  },
  {
    key: 19,
    userID: 3,
    startDate: new Date("2020-09-22T09:10:02+02:00"),
    endDate: new Date("2020-09-22T10:25:02+02:00"),
    summary: "P0032200322 - P0032200322"
  },
  {
    key: 20,
    userID: 3,
    startDate: new Date("2020-09-22T11:05:03+02:00"),
    endDate: new Date("2020-09-22T12:00:03+02:00"),
    summary: "P0032300323 - P0032300323"
  },
  {
    key: 21,
    userID: 3,
    startDate: new Date("2020-09-22T12:15:02+02:00"),
    endDate: new Date("2020-09-22T13:25:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 22,
    userID: 3,
    startDate: new Date("2020-09-22T12:40:03+02:00"),
    endDate: new Date("2020-09-22T13:15:03+02:00"),
    summary: "P0032400324 - P0032400324"
  },
  {
    key: 23,
    userID: 3,
    startDate: new Date("2020-09-22T13:55:05+02:00"),
    endDate: new Date("2020-09-22T15:20:05+02:00"),
    summary: "P0032500325 - P0032500325"
  },
  {
    key: 24,
    userID: 3,
    startDate: new Date("2020-09-22T16:00:06+02:00"),
    endDate: new Date("2020-09-22T16:35:06+02:00"),
    summary: "P0032600326 - P0032600326"
  },
  {
    key: 25,
    userID: 4,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:25:00+02:00"),
    summary: "P0040100401 - P0040100401"
  },
  {
    key: 26,
    userID: 4,
    startDate: new Date("2020-09-22T10:05:00+02:00"),
    endDate: new Date("2020-09-22T10:45:00+02:00"),
    summary: "P0040200402 - P0040200402"
  },
  {
    key: 27,
    userID: 4,
    startDate: new Date("2020-09-22T11:15:02+02:00"),
    endDate: new Date("2020-09-22T12:30:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 28,
    userID: 4,
    startDate: new Date("2020-09-22T11:25:00+02:00"),
    endDate: new Date("2020-09-22T12:25:00+02:00"),
    summary: "P0040300403 - P0040300403"
  },
  {
    key: 29,
    userID: 4,
    startDate: new Date("2020-09-22T13:05:01+02:00"),
    endDate: new Date("2020-09-22T13:35:01+02:00"),
    summary: "P0040400404 - P0040400404"
  },
  {
    key: 30,
    userID: 4,
    startDate: new Date("2020-09-22T14:15:02+02:00"),
    endDate: new Date("2020-09-22T15:20:02+02:00"),
    summary: "P0040500405 - P0040500405"
  },
  {
    key: 31,
    userID: 4,
    startDate: new Date("2020-09-22T15:15:03+02:00"),
    endDate: new Date("2020-09-22T16:30:03+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 32,
    userID: 4,
    startDate: new Date("2020-09-22T16:00:03+02:00"),
    endDate: new Date("2020-09-22T17:05:03+02:00"),
    summary: "P0040600406 - P0040600406"
  },
  {
    key: 33,
    userID: 5,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:15:00+02:00"),
    summary: "P0048400484 - P0048400484"
  },
  {
    key: 34,
    userID: 5,
    startDate: new Date("2020-09-22T09:55:02+02:00"),
    endDate: new Date("2020-09-22T11:15:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 35,
    userID: 5,
    startDate: new Date("2020-09-22T11:55:04+02:00"),
    endDate: new Date("2020-09-22T12:25:04+02:00"),
    summary: "P0048500485 - P0048500485"
  },
  {
    key: 36,
    userID: 5,
    startDate: new Date("2020-09-22T13:05:05+02:00"),
    endDate: new Date("2020-09-22T14:10:05+02:00"),
    summary: "P0048600486 - P0048600486"
  },
  {
    key: 37,
    userID: 5,
    startDate: new Date("2020-09-22T14:50:05+02:00"),
    endDate: new Date("2020-09-22T15:35:05+02:00"),
    summary: "P0048700487 - P0048700487"
  },
  {
    key: 38,
    userID: 5,
    startDate: new Date("2020-09-22T16:15:07+02:00"),
    endDate: new Date("2020-09-22T17:05:07+02:00"),
    summary: "P0048800488 - P0048800488"
  },
  {
    key: 39,
    userID: 6,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:50:00+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 40,
    userID: 6,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:55:00+02:00"),
    summary: "P0057000570 - P0057000570"
  },
  {
    key: 41,
    userID: 6,
    startDate: new Date("2020-09-22T09:35:02+02:00"),
    endDate: new Date("2020-09-22T10:25:02+02:00"),
    summary: "P0057100571 - P0057100571"
  },
  {
    key: 42,
    userID: 6,
    startDate: new Date("2020-09-22T11:05:02+02:00"),
    endDate: new Date("2020-09-22T12:25:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 43,
    userID: 6,
    startDate: new Date("2020-09-22T13:05:03+02:00"),
    endDate: new Date("2020-09-22T14:30:03+02:00"),
    summary: "P0057200572 - P0057200572"
  },
  {
    key: 44,
    userID: 6,
    startDate: new Date("2020-09-22T15:10:03+02:00"),
    endDate: new Date("2020-09-22T15:45:03+02:00"),
    summary: "P0057300573 - P0057300573"
  },
  {
    key: 45,
    userID: 6,
    startDate: new Date("2020-09-22T16:25:02+02:00"),
    endDate: new Date("2020-09-22T17:05:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 46,
    userID: 6,
    startDate: new Date("2020-09-22T16:25:05+02:00"),
    endDate: new Date("2020-09-22T17:10:05+02:00"),
    summary: "P0057400574 - P0057400574"
  },
  {
    key: 47,
    userID: 7,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:30:00+02:00"),
    summary: "P0065400654 - P0065400654"
  },
  {
    key: 48,
    userID: 7,
    startDate: new Date("2020-09-22T09:10:01+02:00"),
    endDate: new Date("2020-09-22T10:10:01+02:00"),
    summary: "P0065500655 - P0065500655"
  },
  {
    key: 49,
    userID: 7,
    startDate: new Date("2020-09-22T10:50:02+02:00"),
    endDate: new Date("2020-09-22T12:05:02+02:00"),
    summary: "P0065600656 - P0065600656"
  },
  {
    key: 50,
    userID: 7,
    startDate: new Date("2020-09-22T12:45:03+02:00"),
    endDate: new Date("2020-09-22T14:00:03+02:00"),
    summary: "P0065700657 - P0065700657"
  },
  {
    key: 51,
    userID: 7,
    startDate: new Date("2020-09-22T14:40:04+02:00"),
    endDate: new Date("2020-09-22T15:55:04+02:00"),
    summary: "P0065800658 - P0065800658"
  },
  {
    key: 52,
    userID: 7,
    startDate: new Date("2020-09-22T16:35:05+02:00"),
    endDate: new Date("2020-09-22T18:00:05+02:00"),
    summary: "P0065900659 - P0065900659"
  },
  {
    key: 53,
    userID: 8,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:30:00+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 54,
    userID: 8,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:25:00+02:00"),
    summary: "P0073700737 - P0073700737"
  },
  {
    key: 55,
    userID: 8,
    startDate: new Date("2020-09-22T10:05:00+02:00"),
    endDate: new Date("2020-09-22T11:05:00+02:00"),
    summary: "P0073800738 - P0073800738"
  },
  {
    key: 56,
    userID: 8,
    startDate: new Date("2020-09-22T11:45:01+02:00"),
    endDate: new Date("2020-09-22T12:15:01+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 57,
    userID: 8,
    startDate: new Date("2020-09-22T12:55:02+02:00"),
    endDate: new Date("2020-09-22T14:20:02+02:00"),
    summary: "P0073900739 - P0073900739"
  },
  {
    key: 58,
    userID: 8,
    startDate: new Date("2020-09-22T15:00:03+02:00"),
    endDate: new Date("2020-09-22T16:00:03+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 59,
    userID: 8,
    startDate: new Date("2020-09-22T16:40:03+02:00"),
    endDate: new Date("2020-09-22T17:15:03+02:00"),
    summary: "P0074000740 - P0074000740"
  },
  {
    key: 60,
    userID: 9,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:00:00+02:00"),
    summary: "P0081900819 - P0081900819"
  },
  {
    key: 61,
    userID: 9,
    startDate: new Date("2020-09-22T09:40:00+02:00"),
    endDate: new Date("2020-09-22T10:15:00+02:00"),
    summary: "P0082000820 - P0082000820"
  },
  {
    key: 62,
    userID: 9,
    startDate: new Date("2020-09-22T10:55:00+02:00"),
    endDate: new Date("2020-09-22T12:20:00+02:00"),
    summary: "P0082100821 - P0082100821"
  },
  {
    key: 63,
    userID: 9,
    startDate: new Date("2020-09-22T13:00:01+02:00"),
    endDate: new Date("2020-09-22T13:45:01+02:00"),
    summary: "P0082200822 - P0082200822"
  },
  {
    key: 64,
    userID: 9,
    startDate: new Date("2020-09-22T14:25:02+02:00"),
    endDate: new Date("2020-09-22T15:40:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 65,
    userID: 9,
    startDate: new Date("2020-09-22T16:20:04+02:00"),
    endDate: new Date("2020-09-22T16:55:04+02:00"),
    summary: "P0082300823 - P0082300823"
  },
  {
    key: 66,
    userID: 10,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:05:00+02:00"),
    summary: "P0090000900 - P0090000900"
  },
  {
    key: 67,
    userID: 10,
    startDate: new Date("2020-09-22T09:45:01+02:00"),
    endDate: new Date("2020-09-22T10:25:01+02:00"),
    summary: "P0090100901 - P0090100901"
  },
  {
    key: 68,
    userID: 10,
    startDate: new Date("2020-09-22T11:05:03+02:00"),
    endDate: new Date("2020-09-22T12:25:03+02:00"),
    summary: "P0090200902 - P0090200902"
  },
  {
    key: 69,
    userID: 10,
    startDate: new Date("2020-09-22T13:05:04+02:00"),
    endDate: new Date("2020-09-22T13:55:04+02:00"),
    summary: "P0090300903 - P0090300903"
  },
  {
    key: 70,
    userID: 10,
    startDate: new Date("2020-09-22T14:35:04+02:00"),
    endDate: new Date("2020-09-22T15:40:04+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 71,
    userID: 10,
    startDate: new Date("2020-09-22T16:20:05+02:00"),
    endDate: new Date("2020-09-22T17:45:05+02:00"),
    summary: "P0090400904 - P0090400904"
  },
  {
    key: 72,
    userID: 12,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:55:00+02:00"),
    summary: "P0098300983 - P0098300983"
  },
  {
    key: 73,
    userID: 12,
    startDate: new Date("2020-09-22T09:35:01+02:00"),
    endDate: new Date("2020-09-22T10:45:01+02:00"),
    summary: "P0098400984 - P0098400984"
  },
  {
    key: 74,
    userID: 12,
    startDate: new Date("2020-09-22T10:05:00+02:00"),
    endDate: new Date("2020-09-22T11:10:00+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 75,
    userID: 12,
    startDate: new Date("2020-09-22T11:25:01+02:00"),
    endDate: new Date("2020-09-22T12:25:01+02:00"),
    summary: "P0098500985 - P0098500985"
  },
  {
    key: 76,
    userID: 12,
    startDate: new Date("2020-09-22T13:05:03+02:00"),
    endDate: new Date("2020-09-22T14:05:03+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 77,
    userID: 12,
    startDate: new Date("2020-09-22T14:45:03+02:00"),
    endDate: new Date("2020-09-22T15:50:03+02:00"),
    summary: "P0098600986 - P0098600986"
  },
  {
    key: 78,
    userID: 12,
    startDate: new Date("2020-09-22T16:30:04+02:00"),
    endDate: new Date("2020-09-22T17:05:04+02:00"),
    summary: "P0098700987 - P0098700987"
  },
  {
    key: 79,
    userID: 13,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:25:00+02:00"),
    summary: "P0106601066 - P0106601066"
  },
  {
    key: 80,
    userID: 13,
    startDate: new Date("2020-09-22T10:05:00+02:00"),
    endDate: new Date("2020-09-22T11:00:00+02:00"),
    summary: "P0106701067 - P0106701067"
  },
  {
    key: 81,
    userID: 13,
    startDate: new Date("2020-09-22T11:40:01+02:00"),
    endDate: new Date("2020-09-22T12:35:01+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 82,
    userID: 13,
    startDate: new Date("2020-09-22T13:15:02+02:00"),
    endDate: new Date("2020-09-22T14:10:02+02:00"),
    summary: "P0106801068 - P0106801068"
  },
  {
    key: 83,
    userID: 13,
    startDate: new Date("2020-09-22T14:50:02+02:00"),
    endDate: new Date("2020-09-22T15:20:02+02:00"),
    summary: "P0106901069 - P0106901069"
  },
  {
    key: 84,
    userID: 13,
    startDate: new Date("2020-09-22T16:00:04+02:00"),
    endDate: new Date("2020-09-22T17:00:04+02:00"),
    summary: "P0107001070 - P0107001070"
  },
  {
    key: 85,
    userID: 14,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:20:00+02:00"),
    summary: "P0114701147 - P0114701147"
  },
  {
    key: 86,
    userID: 14,
    startDate: new Date("2020-09-22T10:00:01+02:00"),
    endDate: new Date("2020-09-22T11:15:01+02:00"),
    summary: "P0114801148 - P0114801148"
  },
  {
    key: 87,
    userID: 14,
    startDate: new Date("2020-09-22T10:00:02+02:00"),
    endDate: new Date("2020-09-22T10:30:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 88,
    userID: 14,
    startDate: new Date("2020-09-22T11:55:02+02:00"),
    endDate: new Date("2020-09-22T12:30:02+02:00"),
    summary: "P0114901149 - P0114901149"
  },
  {
    key: 89,
    userID: 14,
    startDate: new Date("2020-09-22T12:20:05+02:00"),
    endDate: new Date("2020-09-22T12:50:05+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 90,
    userID: 14,
    startDate: new Date("2020-09-22T13:10:03+02:00"),
    endDate: new Date("2020-09-22T13:55:03+02:00"),
    summary: "P0115001150 - P0115001150"
  },
  {
    key: 91,
    userID: 14,
    startDate: new Date("2020-09-22T14:35:04+02:00"),
    endDate: new Date("2020-09-22T15:20:04+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 92,
    userID: 14,
    startDate: new Date("2020-09-22T16:00:05+02:00"),
    endDate: new Date("2020-09-22T17:10:05+02:00"),
    summary: "P0115101151 - P0115101151"
  },
  {
    key: 93,
    userID: 15,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:40:00+02:00"),
    summary: "P0178901789 - P0178901789"
  },
  {
    key: 94,
    userID: 15,
    startDate: new Date("2020-09-22T09:20:01+02:00"),
    endDate: new Date("2020-09-22T10:30:01+02:00"),
    summary: "P0179001790 - P0179001790"
  },
  {
    key: 95,
    userID: 15,
    startDate: new Date("2020-09-22T11:10:02+02:00"),
    endDate: new Date("2020-09-22T12:20:02+02:00"),
    summary: "P0179101791 - P0179101791"
  },
  {
    key: 96,
    userID: 15,
    startDate: new Date("2020-09-22T13:00:02+02:00"),
    endDate: new Date("2020-09-22T14:05:02+02:00"),
    summary: "P0179201792 - P0179201792"
  },
  {
    key: 97,
    userID: 15,
    startDate: new Date("2020-09-22T14:45:03+02:00"),
    endDate: new Date("2020-09-22T16:05:03+02:00"),
    summary: "P0179301793 - P0179301793"
  },
  {
    key: 98,
    userID: 15,
    startDate: new Date("2020-09-22T16:45:05+02:00"),
    endDate: new Date("2020-09-22T17:30:05+02:00"),
    summary: "P0179401794 - P0179401794"
  },
  {
    key: 99,
    userID: 16,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:35:00+02:00"),
    summary: "P0186501865 - P0186501865"
  },
  {
    key: 100,
    userID: 16,
    startDate: new Date("2020-09-22T09:15:01+02:00"),
    endDate: new Date("2020-09-22T10:30:01+02:00"),
    summary: "P0186601866 - P0186601866"
  },
  {
    key: 101,
    userID: 16,
    startDate: new Date("2020-09-22T11:10:02+02:00"),
    endDate: new Date("2020-09-22T12:10:02+02:00"),
    summary: "P0186701867 - P0186701867"
  },
  {
    key: 102,
    userID: 16,
    startDate: new Date("2020-09-22T12:50:04+02:00"),
    endDate: new Date("2020-09-22T14:10:04+02:00"),
    summary: "P0186801868 - P0186801868"
  },
  {
    key: 103,
    userID: 16,
    startDate: new Date("2020-09-22T14:50:06+02:00"),
    endDate: new Date("2020-09-22T15:45:06+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 104,
    userID: 16,
    startDate: new Date("2020-09-22T16:25:06+02:00"),
    endDate: new Date("2020-09-22T16:55:06+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 105,
    userID: 17,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:15:00+02:00"),
    summary: "P0194501945 - P0194501945"
  },
  {
    key: 106,
    userID: 17,
    startDate: new Date("2020-09-22T09:55:01+02:00"),
    endDate: new Date("2020-09-22T10:30:01+02:00"),
    summary: "P0194601946 - P0194601946"
  },
  {
    key: 107,
    userID: 17,
    startDate: new Date("2020-09-22T11:10:02+02:00"),
    endDate: new Date("2020-09-22T11:55:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 108,
    userID: 17,
    startDate: new Date("2020-09-22T12:35:02+02:00"),
    endDate: new Date("2020-09-22T13:45:02+02:00"),
    summary: "P0194701947 - P0194701947"
  },
  {
    key: 109,
    userID: 17,
    startDate: new Date("2020-09-22T14:25:04+02:00"),
    endDate: new Date("2020-09-22T15:45:04+02:00"),
    summary: "P0194801948 - P0194801948"
  },
  {
    key: 110,
    userID: 17,
    startDate: new Date("2020-09-22T16:25:06+02:00"),
    endDate: new Date("2020-09-22T17:00:06+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 111,
    userID: 18,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:20:00+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 112,
    userID: 18,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:15:00+02:00"),
    summary: "P0122501225 - P0122501225"
  },
  {
    key: 113,
    userID: 18,
    startDate: new Date("2020-09-22T09:55:01+02:00"),
    endDate: new Date("2020-09-22T11:10:01+02:00"),
    summary: "P0122601226 - P0122601226"
  },
  {
    key: 114,
    userID: 18,
    startDate: new Date("2020-09-22T11:40:02+02:00"),
    endDate: new Date("2020-09-22T13:00:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 115,
    userID: 18,
    startDate: new Date("2020-09-22T11:50:02+02:00"),
    endDate: new Date("2020-09-22T13:10:02+02:00"),
    summary: "P0122701227 - P0122701227"
  },
  {
    key: 116,
    userID: 18,
    startDate: new Date("2020-09-22T13:50:02+02:00"),
    endDate: new Date("2020-09-22T14:50:02+02:00"),
    summary: "P0122801228 - P0122801228"
  },
  {
    key: 117,
    userID: 18,
    startDate: new Date("2020-09-22T15:30:02+02:00"),
    endDate: new Date("2020-09-22T16:05:02+02:00"),
    summary: "P0122901229 - P0122901229"
  },
  {
    key: 118,
    userID: 18,
    startDate: new Date("2020-09-22T16:45:03+02:00"),
    endDate: new Date("2020-09-22T17:20:03+02:00"),
    summary: "P0123001230 - P0123001230"
  },
  {
    key: 119,
    userID: 19,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:15:00+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 120,
    userID: 19,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:55:00+02:00"),
    summary: "P0130401304 - P0130401304"
  },
  {
    key: 121,
    userID: 19,
    startDate: new Date("2020-09-22T09:35:00+02:00"),
    endDate: new Date("2020-09-22T10:10:00+02:00"),
    summary: "P0130501305 - P0130501305"
  },
  {
    key: 122,
    userID: 19,
    startDate: new Date("2020-09-22T10:50:00+02:00"),
    endDate: new Date("2020-09-22T11:20:00+02:00"),
    summary: "P0130601306 - P0130601306"
  },
  {
    key: 123,
    userID: 19,
    startDate: new Date("2020-09-22T12:00:01+02:00"),
    endDate: new Date("2020-09-22T13:05:01+02:00"),
    summary: "P0130701307 - P0130701307"
  },
  {
    key: 124,
    userID: 19,
    startDate: new Date("2020-09-22T13:45:02+02:00"),
    endDate: new Date("2020-09-22T14:55:02+02:00"),
    summary: "P0130801308 - P0130801308"
  },
  {
    key: 125,
    userID: 19,
    startDate: new Date("2020-09-22T14:50:04+02:00"),
    endDate: new Date("2020-09-22T16:15:04+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 126,
    userID: 19,
    startDate: new Date("2020-09-22T15:35:02+02:00"),
    endDate: new Date("2020-09-22T16:50:02+02:00"),
    summary: "P0130901309 - P0130901309"
  },
  {
    key: 127,
    userID: 20,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:25:00+02:00"),
    summary: "P0202902029 - P0202902029"
  },
  {
    key: 128,
    userID: 20,
    startDate: new Date("2020-09-22T10:05:00+02:00"),
    endDate: new Date("2020-09-22T10:55:00+02:00"),
    summary: "P0203002030 - P0203002030"
  },
  {
    key: 129,
    userID: 20,
    startDate: new Date("2020-09-22T11:35:00+02:00"),
    endDate: new Date("2020-09-22T12:25:00+02:00"),
    summary: "P0203102031 - P0203102031"
  },
  {
    key: 130,
    userID: 20,
    startDate: new Date("2020-09-22T13:05:00+02:00"),
    endDate: new Date("2020-09-22T14:30:00+02:00"),
    summary: "P0203202032 - P0203202032"
  },
  {
    key: 131,
    userID: 20,
    startDate: new Date("2020-09-22T15:10:00+02:00"),
    endDate: new Date("2020-09-22T16:20:00+02:00"),
    summary: "P0203302033 - P0203302033"
  },
  {
    key: 132,
    userID: 21,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:10:00+02:00"),
    summary: "P0211202112 - P0211202112"
  },
  {
    key: 133,
    userID: 21,
    startDate: new Date("2020-09-22T09:50:01+02:00"),
    endDate: new Date("2020-09-22T10:45:01+02:00"),
    summary: "P0211302113 - P0211302113"
  },
  {
    key: 134,
    userID: 21,
    startDate: new Date("2020-09-22T11:25:01+02:00"),
    endDate: new Date("2020-09-22T12:35:01+02:00"),
    summary: "P0211402114 - P0211402114"
  },
  {
    key: 135,
    userID: 21,
    startDate: new Date("2020-09-22T13:15:02+02:00"),
    endDate: new Date("2020-09-22T13:50:02+02:00"),
    summary: "P0211502115 - P0211502115"
  },
  {
    key: 136,
    userID: 21,
    startDate: new Date("2020-09-22T14:30:02+02:00"),
    endDate: new Date("2020-09-22T15:40:02+02:00"),
    summary: "P0211602116 - P0211602116"
  },
  {
    key: 137,
    userID: 21,
    startDate: new Date("2020-09-22T16:20:03+02:00"),
    endDate: new Date("2020-09-22T17:00:03+02:00"),
    summary: "P0211702117 - P0211702117"
  },
  {
    key: 138,
    userID: 22,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:20:00+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 139,
    userID: 22,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:45:00+02:00"),
    summary: "P0138401384 - P0138401384"
  },
  {
    key: 140,
    userID: 22,
    startDate: new Date("2020-09-22T09:25:02+02:00"),
    endDate: new Date("2020-09-22T10:35:02+02:00"),
    summary: "P0138501385 - P0138501385"
  },
  {
    key: 141,
    userID: 22,
    startDate: new Date("2020-09-22T11:15:04+02:00"),
    endDate: new Date("2020-09-22T12:25:04+02:00"),
    summary: "P0138601386 - P0138601386"
  },
  {
    key: 142,
    userID: 22,
    startDate: new Date("2020-09-22T11:50:03+02:00"),
    endDate: new Date("2020-09-22T12:40:03+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 143,
    userID: 22,
    startDate: new Date("2020-09-22T13:05:05+02:00"),
    endDate: new Date("2020-09-22T13:40:05+02:00"),
    summary: "P0138701387 - P0138701387"
  },
  {
    key: 144,
    userID: 22,
    startDate: new Date("2020-09-22T14:20:07+02:00"),
    endDate: new Date("2020-09-22T15:40:07+02:00"),
    summary: "P0138801388 - P0138801388"
  },
  {
    key: 145,
    userID: 22,
    startDate: new Date("2020-09-22T16:20:07+02:00"),
    endDate: new Date("2020-09-22T17:35:07+02:00"),
    summary: "P0138901389 - P0138901389"
  },
  {
    key: 146,
    userID: 23,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:20:00+02:00"),
    summary: "P0147201472 - P0147201472"
  },
  {
    key: 147,
    userID: 23,
    startDate: new Date("2020-09-22T10:00:02+02:00"),
    endDate: new Date("2020-09-22T11:10:02+02:00"),
    summary: "P0147301473 - P0147301473"
  },
  {
    key: 148,
    userID: 23,
    startDate: new Date("2020-09-22T11:50:02+02:00"),
    endDate: new Date("2020-09-22T12:20:02+02:00"),
    summary: "P0147401474 - P0147401474"
  },
  {
    key: 149,
    userID: 23,
    startDate: new Date("2020-09-22T13:00:03+02:00"),
    endDate: new Date("2020-09-22T14:20:03+02:00"),
    summary: "P0147501475 - P0147501475"
  },
  {
    key: 150,
    userID: 23,
    startDate: new Date("2020-09-22T15:00:03+02:00"),
    endDate: new Date("2020-09-22T15:30:03+02:00"),
    summary: "P0147601476 - P0147601476"
  },
  {
    key: 151,
    userID: 23,
    startDate: new Date("2020-09-22T16:10:05+02:00"),
    endDate: new Date("2020-09-22T17:25:05+02:00"),
    summary: "P0147701477 - P0147701477"
  },
  {
    key: 152,
    userID: 24,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:15:00+02:00"),
    summary: "P0155001550 - P0155001550"
  },
  {
    key: 153,
    userID: 24,
    startDate: new Date("2020-09-22T09:55:02+02:00"),
    endDate: new Date("2020-09-22T11:15:02+02:00"),
    summary: "P0155101551 - P0155101551"
  },
  {
    key: 154,
    userID: 24,
    startDate: new Date("2020-09-22T11:55:02+02:00"),
    endDate: new Date("2020-09-22T12:35:02+02:00"),
    summary: "P0155201552 - P0155201552"
  },
  {
    key: 155,
    userID: 24,
    startDate: new Date("2020-09-22T13:15:02+02:00"),
    endDate: new Date("2020-09-22T14:30:02+02:00"),
    summary: "P0155301553 - P0155301553"
  },
  {
    key: 156,
    userID: 24,
    startDate: new Date("2020-09-22T14:25:05+02:00"),
    endDate: new Date("2020-09-22T15:50:05+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 157,
    userID: 24,
    startDate: new Date("2020-09-22T15:10:04+02:00"),
    endDate: new Date("2020-09-22T16:35:04+02:00"),
    summary: "P0155401554 - P0155401554"
  },
  {
    key: 158,
    userID: 24,
    startDate: new Date("2020-09-22T16:30:06+02:00"),
    endDate: new Date("2020-09-22T17:25:06+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 159,
    userID: 25,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:40:00+02:00"),
    summary: "P0163201632 - P0163201632"
  },
  {
    key: 160,
    userID: 25,
    startDate: new Date("2020-09-22T09:20:02+02:00"),
    endDate: new Date("2020-09-22T09:50:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 161,
    userID: 25,
    startDate: new Date("2020-09-22T10:30:03+02:00"),
    endDate: new Date("2020-09-22T11:00:03+02:00"),
    summary: "P0163301633 - P0163301633"
  },
  {
    key: 162,
    userID: 25,
    startDate: new Date("2020-09-22T11:40:04+02:00"),
    endDate: new Date("2020-09-22T12:20:04+02:00"),
    summary: "P0163401634 - P0163401634"
  },
  {
    key: 163,
    userID: 25,
    startDate: new Date("2020-09-22T13:00:06+02:00"),
    endDate: new Date("2020-09-22T13:30:06+02:00"),
    summary: "P0163501635 - P0163501635"
  },
  {
    key: 164,
    userID: 25,
    startDate: new Date("2020-09-22T14:10:08+02:00"),
    endDate: new Date("2020-09-22T14:40:08+02:00"),
    summary: "P0163601636 - P0163601636"
  },
  {
    key: 165,
    userID: 25,
    startDate: new Date("2020-09-22T15:20:09+02:00"),
    endDate: new Date("2020-09-22T16:20:09+02:00"),
    summary: "P0163701637 - P0163701637"
  },
  {
    key: 166,
    userID: 26,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:50:00+02:00"),
    summary: "P0171201712 - P0171201712"
  },
  {
    key: 167,
    userID: 26,
    startDate: new Date("2020-09-22T09:25:01+02:00"),
    endDate: new Date("2020-09-22T10:40:01+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 168,
    userID: 26,
    startDate: new Date("2020-09-22T09:30:02+02:00"),
    endDate: new Date("2020-09-22T10:30:02+02:00"),
    summary: "P0171301713 - P0171301713"
  },
  {
    key: 169,
    userID: 26,
    startDate: new Date("2020-09-22T11:10:04+02:00"),
    endDate: new Date("2020-09-22T12:30:04+02:00"),
    summary: "P0171401714 - P0171401714"
  },
  {
    key: 170,
    userID: 26,
    startDate: new Date("2020-09-22T13:10:05+02:00"),
    endDate: new Date("2020-09-22T14:10:05+02:00"),
    summary: "P0171501715 - P0171501715"
  },
  {
    key: 171,
    userID: 26,
    startDate: new Date("2020-09-22T14:50:06+02:00"),
    endDate: new Date("2020-09-22T15:30:06+02:00"),
    summary: "P0171601716 - P0171601716"
  },
  {
    key: 172,
    userID: 26,
    startDate: new Date("2020-09-22T16:10:06+02:00"),
    endDate: new Date("2020-09-22T16:50:06+02:00"),
    summary: "P0171701717 - P0171701717"
  },
  {
    key: 173,
    userID: 27,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:50:00+02:00"),
    summary: "P0219602196 - P0219602196"
  },
  {
    key: 174,
    userID: 27,
    startDate: new Date("2020-09-22T09:30:02+02:00"),
    endDate: new Date("2020-09-22T10:50:02+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 175,
    userID: 27,
    startDate: new Date("2020-09-22T11:30:03+02:00"),
    endDate: new Date("2020-09-22T12:35:03+02:00"),
    summary: "P0219702197 - P0219702197"
  },
  {
    key: 176,
    userID: 27,
    startDate: new Date("2020-09-22T13:15:05+02:00"),
    endDate: new Date("2020-09-22T14:00:05+02:00"),
    summary: "Hij is al weer ziek"
  },
  {
    key: 177,
    userID: 27,
    startDate: new Date("2020-09-22T14:40:05+02:00"),
    endDate: new Date("2020-09-22T16:00:05+02:00"),
    summary: "P0219802198 - P0219802198"
  },
  {
    key: 178,
    userID: 27,
    startDate: new Date("2020-09-22T16:40:06+02:00"),
    endDate: new Date("2020-09-22T17:25:06+02:00"),
    summary: "P0219902199 - P0219902199"
  },
  {
    key: 179,
    userID: 28,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:50:00+02:00"),
    summary: "P0227302273 - P0227302273"
  },
  {
    key: 180,
    userID: 28,
    startDate: new Date("2020-09-22T09:30:02+02:00"),
    endDate: new Date("2020-09-22T10:50:02+02:00"),
    summary: "P0227402274 - P0227402274"
  },
  {
    key: 181,
    userID: 28,
    startDate: new Date("2020-09-22T11:30:03+02:00"),
    endDate: new Date("2020-09-22T12:35:03+02:00"),
    summary: "P0227502275 - P0227502275"
  },
  {
    key: 182,
    userID: 28,
    startDate: new Date("2020-09-22T13:15:04+02:00"),
    endDate: new Date("2020-09-22T14:30:04+02:00"),
    summary: "P0227602276 - P0227602276"
  },
  {
    key: 183,
    userID: 28,
    startDate: new Date("2020-09-22T15:10:05+02:00"),
    endDate: new Date("2020-09-22T15:45:05+02:00"),
    summary: "P0227702277 - P0227702277"
  },
  {
    key: 184,
    userID: 28,
    startDate: new Date("2020-09-22T16:25:06+02:00"),
    endDate: new Date("2020-09-22T17:05:06+02:00"),
    summary: "P0227802278 - P0227802278"
  },
  {
    key: 185,
    userID: 29,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:25:00+02:00"),
    summary: "P0235802358 - P0235802358"
  },
  {
    key: 186,
    userID: 29,
    startDate: new Date("2020-09-22T10:05:01+02:00"),
    endDate: new Date("2020-09-22T11:15:01+02:00"),
    summary: "P0235902359 - P0235902359"
  },
  {
    key: 187,
    userID: 29,
    startDate: new Date("2020-09-22T11:55:03+02:00"),
    endDate: new Date("2020-09-22T13:10:03+02:00"),
    summary: "P0236002360 - P0236002360"
  },
  {
    key: 188,
    userID: 29,
    startDate: new Date("2020-09-22T13:50:04+02:00"),
    endDate: new Date("2020-09-22T14:30:04+02:00"),
    summary: "P0236102361 - P0236102361"
  },
  {
    key: 189,
    userID: 29,
    startDate: new Date("2020-09-22T15:10:05+02:00"),
    endDate: new Date("2020-09-22T16:30:05+02:00"),
    summary: "P0236202362 - P0236202362"
  },
  {
    key: 190,
    userID: 30,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T08:45:00+02:00"),
    summary: "P0243302433 - P0243302433"
  },
  {
    key: 191,
    userID: 30,
    startDate: new Date("2020-09-22T09:25:01+02:00"),
    endDate: new Date("2020-09-22T10:15:01+02:00"),
    summary: "P0243402434 - P0243402434"
  },
  {
    key: 192,
    userID: 30,
    startDate: new Date("2020-09-22T10:55:01+02:00"),
    endDate: new Date("2020-09-22T11:30:01+02:00"),
    summary: "P0243502435 - P0243502435"
  },
  {
    key: 193,
    userID: 30,
    startDate: new Date("2020-09-22T12:10:02+02:00"),
    endDate: new Date("2020-09-22T13:25:02+02:00"),
    summary: "P0243602436 - P0243602436"
  },
  {
    key: 194,
    userID: 30,
    startDate: new Date("2020-09-22T14:05:02+02:00"),
    endDate: new Date("2020-09-22T15:25:02+02:00"),
    summary: "P0243702437 - P0243702437"
  },
  {
    key: 195,
    userID: 30,
    startDate: new Date("2020-09-22T16:05:04+02:00"),
    endDate: new Date("2020-09-22T17:10:04+02:00"),
    summary: "P0243802438 - P0243802438"
  },
  {
    key: 196,
    userID: 31,
    startDate: new Date("2020-09-22T08:00:00+02:00"),
    endDate: new Date("2020-09-22T09:20:00+02:00"),
    summary: "P0251802518 - P0251802518"
  },
  {
    key: 197,
    userID: 31,
    startDate: new Date("2020-09-22T10:00:01+02:00"),
    endDate: new Date("2020-09-22T11:10:01+02:00"),
    summary: "P0251902519 - P0251902519"
  },
  {
    key: 198,
    userID: 31,
    startDate: new Date("2020-09-22T11:50:02+02:00"),
    endDate: new Date("2020-09-22T13:00:02+02:00"),
    summary: "P0252002520 - P0252002520"
  },
  {
    key: 199,
    userID: 31,
    startDate: new Date("2020-09-22T13:40:03+02:00"),
    endDate: new Date("2020-09-22T14:15:03+02:00"),
    summary: "P0252102521 - P0252102521"
  },
  {
    key: 200,
    userID: 31,
    startDate: new Date("2020-09-22T14:55:04+02:00"),
    endDate: new Date("2020-09-22T16:20:04+02:00"),
    summary: "Hij is al weer ziek"
  }
];
