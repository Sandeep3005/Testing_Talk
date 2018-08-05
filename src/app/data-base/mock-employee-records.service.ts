import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MockEmployeeRecordsService {

  getMockEmployeeRecords() {
    let empRecords = [
      {
        empID: 'SH_1001',
        firstName: 'Mishal',
        lastName: 'Parmar',
        password: 'dca6c5734afe5b1c9c10c1540e8ae572'
      },
      {
        empID: 'SH_1002',
        firstName: 'Ankit',
        lastName: 'Koshti',
        password: '447d2c8dc25efbc493788a322f1a00e7'
      },
      {
        empID: 'SH_1003',
        firstName: 'Tarak',
        lastName: 'Kadiya',
        password: 'ce7884816f27030240e411935e11a93b'
      },
      {
        empID: 'SH_1004',
        firstName: 'Pramod',
        lastName: 'Vekariya',
        password: 'bb16fa6160fa1d8a73eba6217844a08b'
      },
      {
        empID: 'SH_1005',
        firstName: 'Kamlesh',
        lastName: 'Chetani',
        password: 'fca5abd59b385e783b5c896c851372ab'
      }
    ];

    return Observable.of(empRecords);
  }

  setCurrentEmp(emp) {
    localStorage.setItem('emp', JSON.stringify(emp));
  }

  getCurrentEmp() {
    return JSON.parse(localStorage.getItem('emp'));
  }
}
