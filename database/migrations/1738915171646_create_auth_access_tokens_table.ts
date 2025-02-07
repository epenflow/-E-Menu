import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'auth_access_tokens'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id', {
          primaryKey: true,
          useBinaryUuid: true,
        })
        .defaultTo(this.raw('uuid_generate_v4()'))
      table.uuid('tokenable_id').notNullable().references('id').inTable('users').onDelete('CASCADE')

      table.string('type').notNullable()
      table.string('name').nullable()
      table.string('hash').notNullable()
      table.text('abilities').notNullable()
      table.timestamp('last_used_at').nullable()
      table.timestamp('expires_at').nullable()
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
