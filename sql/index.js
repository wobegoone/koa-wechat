import mysql from 'mysql'
import config from '../config/config.js'

/**
 * 创建mysql连接
 */
let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USER,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
})


/**
 * 公共的查询语句
 * @param {sql语句} sql
 * @param {查询数据} values
 */
let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        resolve(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
        })
        connection.release()
      }
    })
  })
}

/**
 * 创建表
 * @param {string} sql 创建表的sql语句
 */
let createTable = sql => {
  return query( sql, [] )
}

module.exports = {
  query,
  createTable
}

