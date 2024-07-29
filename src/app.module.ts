import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeCategory } from './recipe/recipe-category.entity';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'dulya',
      password: 'dulya@1120',
      database: 'ghost_cms',
      entities: [RecipeCategory],
      synchronize: true,
      driver: require('mysql2'),
    }),
    RecipeModule,
  ],
})
export class AppModule {}
