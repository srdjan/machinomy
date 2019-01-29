import { Base, CallbackFunction } from 'db-migrate-base'

export function up (db: Base, callback: CallbackFunction) {
  return db.addColumn('channel', 'settlementperiod', {
    type: 'string'
  }, callback)
}

export function down (db: Base, callback: CallbackFunction) {
  return db.removeColumn('channel', 'settlementperiod', callback)
}
