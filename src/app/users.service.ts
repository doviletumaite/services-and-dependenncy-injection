export class UserService {
  activeUsers = ['Max', 'Anna','Gigi', 'Bob'];
  inactiveUsers = ['Chris', 'Manu', 'Will', 'Berrz']

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id])
    this.inactiveUsers.splice(id, 1)
  }

  setToInactive(id: number){
    this.inactiveUsers.push(this.inactiveUsers[id])
    this.activeUsers.splice(id, 1)
  }
}
