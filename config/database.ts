// import { CommentsModule } from 'src/comments/comments.module';
// import {Comment} from 'src/comments/entities/comment.entity';
// export default {
//   name: 'default',
//   type: process.env.TYPEORM_TYPE || 'mysql',
//   host: process.env.TYPEORM_HOST || 'localhost',
//   username: process.env.TYPEORM_USERNAME || 'guest',
//   password: process.env.TYPEORM_PASSWORD || null,
//   database: process.env.TYPEORM_DATABASE || 'core',
//   port: parseInt(process.env.TYPEORM_PORT, 10) || 3306,
//   logging: process.env.TYPEORM_LOGGING === 'true',
//   entities: [Comment],
//   autoLoadEntities: true,
//   migrations: ['migrations/**/*.ts'],
//   migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
//   synchronize: process.env.TYPEORM_SYNCHRONIZE === 'false',
//   cli: {
//     entitiesDir: 'src',
//     migrationsDir: 'migrations',
//   },
// };
