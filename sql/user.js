import { query, createTable } from './index'

let users =
  `create table if not exists users(
    id INT NOT NULL AUTO_INCREMENT,
    openid INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age VARCHAR(10) NOT NULL,
    PRIMARY KEY ( id )
  );`

let findUsers = () => {
  let _sql = `select * from users`
  return query(_sql)
}

let addUser = values => {
  const { name, password, sex, age } = values
  let _sql = `insert into users set name='${name}', password='${password}', sex='${sex}', age='${age}';`
  return query( _sql )
}

let findUser = values => {
  const { name, password } = values
  let _sql = `select * from users where name="${name}" and password="${password}"`
  return query(_sql)
}

createTable(users)

module.exports = {
  findUsers,
  addUser
}

